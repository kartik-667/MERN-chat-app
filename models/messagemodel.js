const mongoose=require('mongoose')


const msgSchema= new mongoose.Schema({
   sender:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
},
content:{
    type:String,
    trim:true
},
chat:{
       type:mongoose.Schema.Types.ObjectId,
        ref:"Chat"
   }




}, {
    timestamps:true
})


const msgmodel=mongoose.model("Message",msgSchema)

module.exports= msgmodel