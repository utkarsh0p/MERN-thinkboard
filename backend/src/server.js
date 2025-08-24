import express from 'express'
const app = express();
import cors from 'cors'
import path from 'path'
import { connectDB } from './config/db.js';
import notesRoutes from './routes/notesRoutes.js'
import rateLimiter from '../middleware/rateLimiter.js';
app.use(cors())
const __dirname = path.resolve();
app.use(express.json())
app.use(rateLimiter)
app.use('/api/route',notesRoutes)

if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname,'../frontend/dist')))
app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
})
}
connectDB().then(()=>{
      app.listen(process.env.PORT || 3000,()=>{
      console.log("sever runnig on 3000")
   })
})