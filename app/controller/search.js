const {findCustomer} = require('../models/queries/db_queries.js');
module.exports = (req, res, next) => {
  const searchKey = req.query.searchKey;
  const { userID } = req.user;
  findCustomer(searchKey, userID, (err, result) => {
    if (err) return next(err);
    res.json(result.rows);
  });
};
