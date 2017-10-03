module.exports = (req, res, next) => {
  if (req.url === '/signup') {
    if (req.method === 'POST') {
      req.user = {
        username: req.body.name,
        password: req.body.pwd,
        email: req.body.email,
        address: req.body.address
      }
    }
  } else {
    const email = req.body.email
    const password = req.body.password
    req.user = {email: email, password: password}
  }
  next()
}
