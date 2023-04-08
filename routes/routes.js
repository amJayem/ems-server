const express = require('express')
const router = express.Router()
const expenseCost = require('../models/models')
// const moment = require('moment')
const months = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12
}
async function run() {
  try {
    // create a expense api to save expense information
    router.post('/expense', async (req, res) => {
      const expense = req.body
      const newExpense = new expenseCost(expense)
      const Data = await newExpense
        .save()
        .then((result) => {
          res.status(200).json({
            success: true,
            data: result
          })
        })
        .catch((err) => {
          res.status(500).json({
            error: 'Server Side error'
          })
        })
    })
    // getting all-expense data with/without specific month
    router.get('/all-expense', async (req, res) => {
      const currentTime = new Date()
      const currentMonth = currentTime.getMonth() + 1
      const queryMonth =
        months[req.query.month] === undefined
          ? currentMonth
          : months[req.query.month]

      try {
        const allData = await expenseCost.find({
          createdAt: {
            $gte: new Date(`${queryMonth}/1/2023`),
            $lt: new Date(`${queryMonth}/31/2023`)
          }
        })

        const page = +req.query.page

        if (req.query.expense !== '') {
          const data = await expenseCost
            .find({
              createdAt: {
                $gte: new Date(`${queryMonth}/1/2023`),
                $lt: new Date(`${queryMonth}/31/2023`)
              },
              status: req.query.expense
            })
            .skip(page * 5)
            .limit(5)
            .sort({ createdAt: -1 })
          const countData = await expenseCost
            .find({
              createdAt: {
                $gte: new Date(`${queryMonth}/1/2023`),
                $lt: new Date(`${queryMonth}/31/2023`)
              },
              status: req.query.expense
            })
            .sort({ createdAt: -1 })
          const count = countData.length
          res.send({ data, count, allData, exportData: countData })
        } else {
          const data = await expenseCost
            .find({
              createdAt: {
                $gte: new Date(`${queryMonth}/1/2023`),
                $lt: new Date(`${queryMonth}/31/2023`)
              }
            })
            .skip(page * 5)
            .limit(5)
            .sort({ createdAt: -1 })
          const countData = await expenseCost
            .find({
              createdAt: {
                $gte: new Date(`${queryMonth}/1/2023`),
                $lt: new Date(`${queryMonth}/31/2023`)
              }
            })
            .sort({ createdAt: -1 })
          const count = countData.length
          res.send({ data, count, allData, exportData: countData })
        }
      } catch (error) {
        console.error(error)
      }
    })

    // deleting expense by id
    router.delete('/delete-expense/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: id }
      const result = await expenseCost.deleteOne(query)
      res.send(result)
    })
  } catch (err) {
    console.log(err)
  }
}
run().catch((err) => console.log(err))

module.exports = router
