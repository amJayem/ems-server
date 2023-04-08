const mongoose = require('mongoose')

// Mongoose Schema
const expenseSchema = new mongoose.Schema(
  {
    title: {
      default: 'Credit Added',
      type: String,
      required: true
    },
    cost: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ['expense', 'credit']
    }
  },
  { timestamps: true }
)

// Mongoose Model
module.exports = mongoose.model('expense', expenseSchema)
