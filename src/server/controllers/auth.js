const jwt = require('jsonwebtoken')
require('dotenv').config()
const SECRET = process.env.SECRET

const generateToken = (info) => {
  console.log(info)
  
  return jwt.sign(
    {
      //information we want to use for encoding
      username: info.name,
      email: info.email
    },
    SECRET,
    {
      //options
      expiresIn: "5 minutes"
    }
  )
}

module.exports = {
  createToken: (req, res) => {
    console.log(`Request: ${req}`)
    // let token = generateToken(req.body)
    // res.status(200).send(token)
  },

  validateToken: async (req, res) => {
    console.log(req.body)
  },
}