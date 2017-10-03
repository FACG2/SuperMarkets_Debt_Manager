const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
  const {cookies} = req
  const token = cookies.token
  if(!token) return  res.render('unauthorized')
  jwt.verify(token, process.env.SECRIT, (err, user) => {
    if (err) return next({ErrMsg: 'Unauthorized access ,Fack token!', stack: err.stack})
    else {
      req.user = {username: user.username, email: user.email, userID: user.userID}
      return next()
    }
  })
}
