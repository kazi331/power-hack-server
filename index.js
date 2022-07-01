const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();


// var jwt = require('jsonwebtoken');
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

// mongodb configuration
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cyj0k.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    await client.connect();
    const billCollection = client.db("power-hack").collection("bills");

    // find bills from db
    app.get('/api/billing-list', async (req, res) => {
      // const query = {}
      const bills = await billCollection.find().toArray();
      res.send(bills);
    })

    // create add billing
    app.post('/api/add-billing', async (req, res) => {
      const billing = req.body;
      console.log(billing);
      const result = await billCollection.insertOne(billing);
      res.send(result)
    })


  }
  finally { }
}
run().catch(console.dir);
// home route
app.get('/', (req, res) => {
  res.send('Power hack ph is running fine!');
  console.log('home')

})
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${5000}`)
})