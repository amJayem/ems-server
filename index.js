const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const db = require('./dbConfig/dbConnect')
const routes = require('./routes/routes')

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
// app.get('/', (req, res) => {
//   res.send(`Server Running on port:${port} `)
// })

app.listen(port, () => {
  console.log('server running port:', port)
})
