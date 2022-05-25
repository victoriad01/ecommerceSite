const router = require('express').Router()
const stripe = require('stripe')(
  'sk_test_51L1u19AyUGwoMrM9HSD2c41Yx2D7419dxkmqzfzHRtpY4ibV4WLydv6YJEDULwsUEb7xxFE5J61ye4C25Fh7r0KQ00xz7bmQop'
)

router.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr)
      } else {
        res.status(200).json(stripeRes)
      }
    }
  )
})
module.exports = router
