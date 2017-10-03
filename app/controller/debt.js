const {storeDebt} = require('../models/queries/db_queries.js')
exports.post = (req, res, next) => {
// adding the debts
// posted data shape [ {type,quantity,price},{},{}]
  let debtsBuffer = ''
  req.on('data', (chunk) => {
    debtsBuffer += chunk
  })
  req.on('end', () => {
    const debts = JSON.parse(debtsBuffer)
    const customerId = req.params.id
    storeDebt(debts, customerId, (err, status) => {
      if (err) return next(err)
      res.redirect(`/customer/${customerId}`)
    })
  })
}
