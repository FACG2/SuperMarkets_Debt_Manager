const { isUser, signUpNewUser } = require('../models/queries/db_queries.js')
const {regFormValidator} = require('./cont_helpers/validator.js')
const cookieEncrypt = require('./cont_helpers/cookieEncrypt.js')
const bcrypt = require('bcrypt')
exports.get = (req, res, next) => {
  res.render('signUp', {layout: 'formMain'})
}
exports.post = (req, res, next) => {
  // validate the form
  // check if the user already exist
  // insert the new user
  const {user} = req

  if (!regFormValidator(user).valid) return res.render('signUp', regFormValidator(user))
  isUser(user.email, (err, exist) => {
    if (err) return next(err)
    if (exist) return res.redirect('/login')
            // the user already exist ,redirect him home
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) return next(err)
      user.password = hash
      signUpNewUser(user, (err, insertionState) => {
        if (err) return next(err)
        const user = { name: insertionState.username, email: insertionState.email, userID: insertionState.id }
        cookieEncrypt(user, (err, token) => {
          if (err) return next(err)
          res.cookie('token', token, { httpOnly: true })
          res.redirect('/')
        })
      })
    })
  })
}
