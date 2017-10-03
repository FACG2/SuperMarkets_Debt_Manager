const router = require('express').Router()
const proTected = require('../Middlewares/protected.js')
const userSetter = require('../Middlewares/fieldsSetters.js')
// delete the following when adding actual routes
  // example for requiring controllers
const login = require('./login.js')
const home = require('./home.js')
const signup = require('./signup.js')
const search = require('./search.js')
const logout = require('./logout.js')
const customer = require('./customer.js')
const debt = require('./debt.js')
const notFound = require('./notFound.js')
  // example for routes
router.get('/login', login.get)
router.post('/login', userSetter, login.post)
router.post('/signup', userSetter, signup.post)
router.get('/signup', signup.get)
router.get('/', proTected, home)
router.get('/api/v1/search', proTected, search)
router.post('/customer', proTected, customer.post)
router.get('/customer/:id', proTected, customer.get)
router.post('/customer/:id/debt', proTected, debt.post)
// router.get('/customer/:id/debt', debt.get);
router.get('/logout', logout)
router.get('*', notFound)
module.exports = router
