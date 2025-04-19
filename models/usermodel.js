const mongoose=require('mongoose')
// import {profile} from '../images/profile.jpg'

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://www.pinterest.com/adinaiqbl/default-icon-pfp/"
    }
   

}, {
    timestamps:true
})


const usermodel=mongoose.model("User",userSchema)

module.exports= usermodel