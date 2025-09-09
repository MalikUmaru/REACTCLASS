//npm install bcryptjs jsonwebtoken dotenv
import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

export const connectToDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true, 
        useUnifiedTopology: true
    })
    .then(()=>console.log("MongoDb Connected Successfully"))
    .catch((err)=>console.log("Error Connecting to Db"))
}
