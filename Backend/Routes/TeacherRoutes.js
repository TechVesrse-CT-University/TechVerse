import express from "express"
import Teacher from "../Models/Teacher.js"
import bodyParser from "body-parser"
import multer from "multer"
import passport from "passport"
import localStrategy from "passport-local"
const router = express.Router()

passport.use(new localStrategy(Teacher.authenticate()))
passport.serializeUser(Teacher.serializeUser())
passport.deserializeUser(Teacher.deserializeUser())


const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

router.post('/register', async (req, res) => {
    try{
        const {Name , Email , SubjectSpecialization , institution , password} = req.body
        const username = Name
        const newTeacher = {
            Name,
            username,
            Email,
            SubjectSpecialization, 
            institution
        }
        const registered = await Teacher.register(newTeacher, password)
        res.status(200).json('registered successfully')
    }catch(err){
        res.status(500).json({"failed to register" : err.message})
    }
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    try{
        res.status(200).json('logged in successfully')
    }catch(err){
        res.status(500).json({"failed to login" : err.message})
    }
})

router.post('/logout' , (req, res) => {
    req.logout((err) => {
        if(err) {
            res.status(500).json({"failed to logout" : err.message})
            return
        }
        res.status(200).json('logged out successfully')
    })
})

router.get('/profile', (req, res) => {
    if(req.isAuthenticated()){
        res.status(200).json(req.user)
    }else{
        res.status(401).json('unauthenticated')
    }
})


// Route to add content for a teacher
router.post('/add-content', upload.single('file'), async (req, res) => {
    try {
        const { title, description , subject} = req.body;

        // Check if the user is authenticated
        // if (!req.isAuthenticated()) {
        //     return res.status(401).json({ message: "Unauthorized. Please log in." });
        // }

        // Check if a file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // Find the teacher by their ID (from the session)
        const teacher = await Teacher.findById(req.user._id);
        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        // Add the new content to the teacher's content array
        teacher.content.push({
            title,
            description,
            subject,
            file: req.file.buffer, // Store the file as a buffer
            fileType: req.file.mimetype, // Store the MIME type of the file
        });

        // Save the updated teacher document
        await teacher.save();

        res.status(200).json({ message: "Content added successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to add content", error: err.message });
    }
});

router.get('/is-logged-in', (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json({ loggedIn: true });
    } else {
        res.status(200).json({ loggedIn: false });
    }
});

export default router