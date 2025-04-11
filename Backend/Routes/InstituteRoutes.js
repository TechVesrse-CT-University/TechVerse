import express from "express"
import Institution from "../Models/Institute.js"
import passport from "passport"
import localStrategy from "passport-local"
const router = express.Router()

passport.use(new localStrategy(Institution.authenticate()))
passport.serializeUser(Institution.serializeUser())
passport.deserializeUser(Institution.deserializeUser())


router.post('/register', async (req, res) => {
    try{
        const {InstitutionCode , Name , Email , InstituteLocation , AdminstratorName , password} = req.body
        const username = Name
        const newInstitute = {
            InstitutionCode,
            username,
            Name,
            Email,
            InstituteLocation,
            AdminstratorName
        }
        const registered = await Institution.register(newInstitute, password)
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