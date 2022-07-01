const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();




// var jwt = require('jsonwebtoken');
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Power hack ph is running fine!')
})

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${5000}`)
})