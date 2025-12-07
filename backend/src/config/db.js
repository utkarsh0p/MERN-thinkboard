import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
  try {
    console.log('DB_URI from env =', process.env.DB_URI); // 👈 add this line
    await mongoose.connect(process.env.DB_URI);
    console.log('MONGODB CONNECTED  SUCCESSFULLY');
  } catch (err) {
    console.log('MongoDB error in CONNECTION', err);
  }
};
