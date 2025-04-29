const jwt=require('jsonwebtoken')

 function generateToken(userid){
        const token=jwt.sign({userid},process.env.JWT_SECRET,{
            expiresIn:"30d"
        })
        return token

}
module.exports=generateToken