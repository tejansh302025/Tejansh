import express from 'express';
const app = express();
import studentRoutes from './routes/studentRoutes.js';

//middleware
app.use(express.json());

//Routes
app.get('/',(req,res)=>{
  res.send("Student mgmt API is running");
});

app.use("/api/students", studentRoutes);

//404 routs
app.use((req,res)=>{
  res.status(404).json({
    success:false,
    message:'Route not found'
  })
})
export default app;