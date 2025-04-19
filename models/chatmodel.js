const mongoose=require('mongoose')


const chatschema= new mongoose.Schema({
    chatname:{
        type:String,
        trim:true
    },
    isgroupchat:{
        type:Boolean,
        default:false
    },
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    latestmessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    },
    groupadmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})


const chatmodel=mongoose.model("Chat",chatschema)

module.exports= chatmodel