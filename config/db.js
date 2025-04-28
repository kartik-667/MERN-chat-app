const mongoose=require('mongoose')


async function connectDB(){
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI)

        console.log(`mongodb connected ${conn.connection.host}`);
        
        
    } catch (error) {
        console.log("some error occured while connecting", error);
        
    }


}

module.exports=connectDB