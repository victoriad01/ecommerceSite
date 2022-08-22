const jwt = require('jsonwebtoken')
const router = require('./user')

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    // console.log(token)
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) return res.status(403).json('Token is not valid!')
      req.user = user
      next()
    })
  } else {
    return res.status(401).json('You are not authenticated')
  }
}

// const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token
//   console.log(token)

//   if (token) {
//     jwt.verify(token, process.env.JWT_SEC, (err, user) => {
//       if (err) return res.status(403).json('Token is not valid!')
//       req.user = user
//       next()
//     })
//   } else {
//     return res.status(401).json('You are not authenticated')
//   }
// }

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      res.status(403).json('You are not Authorized!')
    }
  })
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(403).json('You are not Authorized!')
    }
  })
}

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
}
