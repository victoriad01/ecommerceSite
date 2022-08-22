const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    categories: { type: Array, required: true },
    color: { type: String, required: true },
    inStock: { type: Boolean, default: true },
    isSlider: { type: Boolean, default: false },
    brand: { type: String, required: true },
    model: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)
