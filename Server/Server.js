const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const url = process.env.MONGO_URL
const form=require('./Modals/Form.modal')
const PORT=process.env.PORT
async function connectToDB() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected successfully");
  } catch (error) {
    console.error('Connection error:', error);
  }
}
connectToDB()
app.listen(process.env.PORT,() => {
  console.log("Listening to " + process.env.PORT);
})
app.post('/form',(req,res)=>{
})

