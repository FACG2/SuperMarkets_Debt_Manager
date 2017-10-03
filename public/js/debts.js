var addDebtBtn = document.getElementById('addbutton');
var debts = [];
var debt = {
  type: document.getElementById('item'),
  price: document.getElementById('price'),
  quantity: document.getElementById('quantity'),
  total: document.getElementById('quantity')
};
var newDebt = {
  type: document.createElement('inpute'),
  price: document.createElement('inpute'),
  quantity: document.createElement('inpute'),
  total: document.createElement('inpute')
};

function addNewRow () {
  debts.push(debt);
}
addDebtBtn.onclick = sendDebts;

function sendDebts () {
  var url = window.location.pathname + '/debt';
  var 	_xhr;
}
