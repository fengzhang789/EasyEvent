const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001

app.use(cors())

app.get('/', (req, res) => {
    res.send(JSON.stringify({hello: "world"}))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})