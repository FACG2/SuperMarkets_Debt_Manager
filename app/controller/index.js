const router = require('express').Router()
// delete the following when adding actual routes
  // example for requiring controllers
const login = require('./login.js')
const home = require('./home.js')
const signup = require('./signup.js')
const search = require('./search.js')
const logout = require('./logout.js')
const customer = require('./customer.js')
const debt = require('./debt.js')
  // example for routes
router.get('/', home)
router.get('/api/v1/search', search)
router.post('/customer', customer.post)
router.get('/customer/:id', customer.get)
// router.get('/customer/:id/debt', debt.get);
router.post('/customer/:id/debt', debt.post)
router.get('/login', login.get)
router.post('/login', login.post)
router.post('/signup', signup.post)
router.get('/signup', signup.get)
router.get('/logout', logout)
router.get('*', (req, res) => {
  res.status(404)
  res.send('URL cannot found' + JSON.stringify({ url: req.protocol + '://' + req.get('host') + req.originalUrl }))
})
module.exports = router
