const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const app=express()
app.use(cors())
dotenv.config()
app.use(express.json())


const port=process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send([{"home page hai ye":123}, {
        'name':'kartik',
        'age':20
    }])
})
app.get("/api/chat",(req,res)=>{
    // res.json({"home page hai ye":123
        
    // })
    res.json([{"home page hai ye":123}, {
        'name':'kartik',
        'age':20
    }])
})

app.listen(9000,()=>{
    console.log("listening on port 9000");
    
})
