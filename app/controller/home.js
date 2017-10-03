const {getAllDebts} = require('../models/queries/db_queries.js')
module.exports = (req, res, next) => {
  // modify this code (just example)
  const { username, userID } = req.user
  getAllDebts(userID, (err, result) => {
    if (err) return next(err)
    res.render('home', {username: username, total: result.rows[0].sum})
  })
}
