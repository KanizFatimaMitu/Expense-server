const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('I am Mitu from expense server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})