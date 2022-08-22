const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')
const search = require('./routes/search')

const cors = require('cors')
const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname)
  },
})

const upload = multer({ storage: fileStorageEngine })

// For uploading single file

app.use('/image', express.static('/images'))

app.post('/single', upload.single('image'), (req, res) => {
  console.log(req.file)
  // res.send('Single file uploaded Successfully!')
  res.json({
    success: 1,
    profile_url: `http//localhost:5000/image/${req.file.filename}`,
  })
})

// For uploading multiple files say 4
app.post('/images', upload.array('images', 4), (req, res) => {
  console.log(req.files)
  res.send('Files uploaded Successfully!!!')
})

dotenv.config()
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connected Successfully!'))
  .catch((err) => {
    console.log(err)
  })

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)
app.use('/api/checkout', stripeRoute)
app.use('/api/search', search)

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend Server Running on PORT 5000')
})
