require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
const colors = require('colors');

connectDB();

app.get('/', (req, res) => {
  res.status(200).json();
})

app.listen(PORT, () => {
  console.log(`Server is live on port: ${PORT}`);
})