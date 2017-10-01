module.exports = {
  getTotal: (a, b) => a * b,
  getDebtsTotal: (debts) => {
    return Object.keys(debts).reduce((acc, key) => {
      acc += Number(debts[key].debt_price) * Number(debts[key].debt_quantity);
      return acc;
    }, 0);
  }
};
