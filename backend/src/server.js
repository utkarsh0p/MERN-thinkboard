import express from 'express';
const app = express();
import cors from 'cors';
import path from 'path';
import { connectDB } from './config/db.js';
import notesRoutes from './routes/notesRoutes.js';
import rateLimiter from '../middleware/rateLimiter.js';
app.use(cors());
const __dirname = path.resolve();
app.use(express.json());
app.use(rateLimiter);
app.use('/api/route', notesRoutes);

// app.use(express.static(path.join(__dirname,'../frontend/dist')))
app.get('/', (req, res) => {
  res.json({ message: "welcome to the bakcend" });
  // res.sendFile(path.join(__dirname,"../frontend", "dist", "index.html"))
});

connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log('sever runnig on 5000');
  });
});
