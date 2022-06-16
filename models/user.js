const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
})

const user = mongoose.model('userschema',userSchema)
module.exports = user