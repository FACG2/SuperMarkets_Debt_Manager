const {storeDebt} = require('../models/queries/db_queries.js');
exports.post = (req, res, next) => {
// adding the debts
// posted data shape [ {type,quantity,price},{},{}]
  let debtsBuffer = '';
  req.on('data', (chunk) => {
    debtsBuffer += chunk;
  });// (debt_type ,debt_price,debt_quantity,customer_id)
  req.on('end', () => {
    const debts = JSON.parse(debtsBuffer);
    const customerId = req.params.id;
    let debtsRecords = debts.reduce((acc, debt) => {
      acc += '(' + debt.type + ',' + debt.quantity + ',' + debt.price + ',' + customerId + '),';
      return acc;
    }, '');
    debtsRecords = debtsRecords.substr(0, debtsRecords.length - 1);
    console.log(debtsRecords);
    storeDebt(debtsRecords, (err, status) => {
      if (err) return next(err);
      res.redirect(`/customer/${customerId}`);
    });
  });
};
