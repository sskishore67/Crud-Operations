const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'sample', // Set the database name to 'sample'
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const FormModel = require('./Modals/FormModel'); // Adjust the path accordingly

app.post('/tests', async (req, res) => {
  try {
    const { Firstname, Lastname, Email, Password } = req.body;
    const newFormEntry = new FormModel({ Firstname, Lastname, Email, Password });
    const savedFormEntry = await newFormEntry.save();
    console.log('Form entry saved:', savedFormEntry); // Log the saved entry
    res.json({ message: 'Form entry saved successfully' });
  } catch (error) {
    console.error('Error saving form entry:', error); // Log the error
    res.status(500).json({ error: 'An error occurred' });
  }
});

const NewuserModal = require('./Modals/NewuserModal'); // Adjust the path accordingly

app.post('/users', async (req, res) => {
  try {
    const { Name,Department,Branch,Year,Address,Mobileno } = req.body;
    const newFormEntry = new NewuserModal({Name,Department,Branch,Year,Address,Mobileno});
    const savedFormEntry = await newFormEntry.save();
    console.log('Form entry saved:', savedFormEntry); // Log the saved entry
    res.json({ message: 'Form entry saved successfully' });
  } catch (error) {
    console.error('Error saving form entry:', error); // Log the error
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/users',(req,res)=>{
  NewuserModal.find()
  .then(users=>res.json(users))
  .catch((err)=>res.json(err))
})

app.get('/users/:id',(req,res)=>{
  const id=req.params.id;
  NewuserModal.findById({_id})
  .then(users=>res.json(users))
  .catch((err)=>res.json(err))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
