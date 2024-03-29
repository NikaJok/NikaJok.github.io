const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3005;

app.use(
  cors({
    origin: '*'
  })
);
app.use(express.json({ extended: false }));
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
const userRouter = require('./routes/user');
app.use('/user', userRouter);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
