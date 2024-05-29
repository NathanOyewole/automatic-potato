const express = require('express');
const mongoose = require('mongoose');
const bodyParser =
require('body-parser');
const cors = require('cors');
require('dotenv').config

const MONGODB_URI = 'mongodb+srv://nathanoyewole7:Gamerlazo_15@cluster0.bfbdm6f.mongodb.net/'

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://nathanoyewole7:Gamerlazo_15@cluster0.bfbdm6f.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/auth', require('./routes/auth'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
console.log(`Server running on port $ {PORT}`));