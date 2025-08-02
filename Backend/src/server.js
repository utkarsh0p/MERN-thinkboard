import express from 'express'
const app = express();
import cors from 'cors'
import { connectDB } from './config/db.js';
import notesRoutes from './routes/notesRoutes.js'
import rateLimiter from '../middleware/rateLimiter.js';
app.use(cors())
app.use(rateLimiter)
app.use(express.json())
app.use('/api/route',notesRoutes)

connectDB().then(()=>{
      app.listen(process.env.PORT || 3000,()=>{
      console.log("sever runnig on 3000")
   })
})