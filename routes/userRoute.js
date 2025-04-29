const express=require('express')
const router=express.Router()
const usermodel=require('../models/usermodel')
const generateToken=require('../config/generatetoken')
const bcrypt=require('bcrypt')

router.post('/signin',async (req,res)=>{
    const {name,email,password} = req.body

    if(!name || !email || !password){
        return res.send('data not found')
    }

    const user=await usermodel.findOne({email})

    if(user){
        return res.send("user already exist")
    }
    const salt=await bcrypt.genSalt(10)
    const hashedpass=await bcrypt.hash(password,salt)
    const newuser=await usermodel.create({
        name,email,password:hashedpass
    })

    if(newuser){
        res.status(201).json({
            _id:newuser._id,
            name,
            email,
            
            token:generateToken(newuser._id)
        })
    }else{
        res.status(400).send("some error occured while creating user")
    }
    

})

router.post('/login',async (req,res)=>{
    const {email,password} = req.body

    if(!email || !password){
    return res.status(400).send("credentials not found")
}
const user=await usermodel.findOne({email})
if(user){
    const passmatch=await bcrypt.compare(password,user.password)
    if(passmatch){
        
        return res.status(200).json({
            _id:user._id,
            
            email,
            
            token:generateToken(user._id)
            
        })
    }else{
        return res.status(400).send("credentials not found")
        
    }
    
}else{
        return res.status(400).send("credentials not found")

    }



    

})

module.exports=router