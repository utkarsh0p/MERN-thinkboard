import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

export const connectDB = async () =>{
  try{
     await mongoose.connect(process.env.DB_URI)
     console.log("MONGODB CONNECTED  SUCCESSFULLY")
  }
  catch(err){
     console.log("MongoDB error in CONNECTION",err)
  }
}
