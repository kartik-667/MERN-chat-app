const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const app=express()
const userroute=require('./routes/userRoute')
app.use(cors())
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const connectdb=require('./config/db')
connectdb()
const port=process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send([{"home page hai ye":123}, {
        'name':'kartik',
        'age':20
    }])
})




app.use('/api/user',userroute)



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
