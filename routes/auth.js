const express = require('express')
const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "itsasecretsign"
const fetchuser = require("./middleware/fetchuser")
router.post('/createuser', async (req, res) => {
    try {
        let user = await User.findOne({ userName: req.body.username })
        if (user) {
            res.status(400).send("Username already exist")
        }
        else {
            const salt = await bcrypt.genSalt(10)
            const secpass = await bcrypt.hash(req.body.password, salt)
            user = await User.create({
                name: req.body.name,
                userName: req.body.username,
                password: secpass
            })
            const data = {
                user: {
                    id: user._id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET)
            res.json(authtoken)
            console.log(authtoken);
        }
    } catch (error) {
        console.error(error + "message");
    }

})

router.post('/login', async (req, res) => {
    const { password, username } = req.body
    try {
        let user = await User.findOne({ userName: username })
        if(!user){
            return res.send(400).json({"error":"please login correct credentials email not exist"})
        }
        const passwordCompare = await bcrypt.compare(password,user.password)
        if (!passwordCompare){

            return res.send(400).json({"error":"please login correct credentials password wrong"})
        }
        const data ={
            user:{
                id:user._id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET)
        res.json({authtoken})
    }
    catch (error) {
        console.log(error)
    }
})

router.get('/fetchuserlist', fetchuser, async (req, res) => {
    let users = await User.find({}).select('-password').exec()
    res.json(users)
})

router.get('/fetchuserdetails', fetchuser, async (req, res) => {
    let user = await User.findOne({ userName: req.body.username }).select('-password').exec();
    res.json(user)
})




module.exports = router