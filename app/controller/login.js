const {loginFormValidator} = require('./cont_helpers/validator.js')
const {isUser} = require('../models/queries/db_queries.js')
const jwtMaker = require('./cont_helpers/cookieEncrypt.js')
const bcrypt = require('bcrypt')
exports.post = (req, res, next) => {
  const {user} = req
  if (!loginFormValidator(user).valid) return res.render('login', {errStatus: true, err: 'invalid email address'})
  // user.password = hash;
  isUser(user.email, (err, result) => {
    if (err) return next(err)
    if (!result) return res.render('login', {errStatus: true, err: 'this user not exist'})
    bcrypt.compare(user.password, result.password, function (err, hashMatched) {
      if (err) return next(err)
      if (!hashMatched) return res.render('login', {errStatus: true, err: 'wrong passwords'})
      const user = {username: result.username, email: result.email, userID: result.id}
      jwtMaker(user, (err, token) => {
        if (err) return next(err)
        res.cookie('token', token, { httpOnly: true })
        return res.redirect('/')
      })
    })
  })
}

exports.get = (req, res) => {
  res.render('login', {layout: 'formMain'})
}
