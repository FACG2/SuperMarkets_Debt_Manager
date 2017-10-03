const jwt = require('jsonwebtoken')
const router = require('../controller/index.js')
module.exports = (req, res, next) => {
  const {cookies} = req
  if (!cookies.token) {
    if (req.url === '/signup') {
      if (req.method === 'POST') {
        req.user = {
          username: req.body.name,
          password: req.body.pwd,
          email: req.body.email,
          address: req.body.address
        }
      }
      return next()
    }
    const routsList = router.stack.map(route => route.route.path)
    if (req.url === '/login' && req.method === 'POST') {
      const email = req.body.email
      const password = req.body.password
      req.user = {email: email, password: password}
      return next()
    }
    if (routsList.indexOf(req.url) !== -1 && req.url !== '/login') {
      res.redirect('/login')
      return
    }
    return next()
  }
}
