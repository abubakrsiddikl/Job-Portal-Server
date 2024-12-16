require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// use middle ware
app.use(cors());
app.use(express.json());

// root get operation
app.get("/", (req, res) => {
  res.send("My Job Portal Server is Running .");
});

// DB_USER = job-hunter
// DB_PASS = TI4tdvVJbQMV7sit

// server side connect to mongodb 

const uri = `mongodb+srv://<db_username>:<db_password>@cluster0.h3mkc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);








// create a listener
app.listen(port, () => {
  console.log(`Server Running This port : ${port}`);
});
