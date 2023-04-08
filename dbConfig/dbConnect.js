// require('dotenv').config()
const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.URI
mongoose
  .connect(uri)
  .then(() => console.log('db connected'))
  .catch(() => console.log('error not connected'))
// mongodb connect by mongoose end
