const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 9000

app.use(cors());
app.use(express.json());

// kanizfatima528
// X702B4Aqs2dJN394


const uri = "mongodb+srv://kanizfatima528:X702B4Aqs2dJN394@cluster0.btigikm.mongodb.net/?retryWrites=true&w=majority";
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
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const transactionsCollection = client.db("Expense-server").collection("transactions")

    // http://localhost:9000/transactions
    app.get('/transactions', async (req, res) => {
      const query = {};
      const cursor = transactionsCollection.find(query);
      const transactions = await cursor.toArray();
      res.send(transactions);
    })


  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('I am Mitu from expense server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})