import express from "express"
import Student from "../Models/Student.js"
import passport from "passport"
import localStrategy from "passport-local"
const router = express.Router()

passport.use(new localStrategy(Student.authenticate()))
passport.serializeUser(Student.serializeUser())
passport.deserializeUser(Student.deserializeUser())


router.post('/register', async (req, res) => {
    try{
        const {Name , StudentID , Email , Institution , Course , password} = req.body
        const username = Name
        const newStudent = {
            Name,
            username,
            StudentID,
            Email,
            Course,
            Institution
        }
        const registered = await Student.register(newStudent, password)
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

router.get('/is-logged-in', (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json({ loggedIn: true });
    } else {
        res.status(200).json({ loggedIn: false });
    }
});

export default router