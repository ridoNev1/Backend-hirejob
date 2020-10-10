const express = require('express')
const router = express.Router()
const portfolioCont = require('../controllers/portfolioCont')

router
  .get('/findall', portfolioCont.findAll)
  .get('/findone/:id', portfolioCont.findOne)
  .post('/insertone', portfolioCont.insertOne)
  .patch('/updateone/:id', portfolioCont.updateOne)

module.exports = router