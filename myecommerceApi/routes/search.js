const { query } = require('express')
const Product = require('../models/Product')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  const query = req.query.q
  try {
    const products = await Product.find({
      title: { $regex: query, $options: 'i' },
    })
    res.status(200).json(products)
  } catch (error) {
    // res.status(500).json(error)
    next(error)
  }
})

module.exports = router
