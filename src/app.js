import express from 'express';
import http from 'http';
const app = express();
const PORT=5050;


app.get('/', (req, res) => {
  res.send('Hello');
});


app.listen(PORT,()=>{
    console.log("Server Created")
})