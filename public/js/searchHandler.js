(function () {
  var search = document.getElementById('search');
  search.onkeyup = findCustomers;
  function findCustomers (e) {
    var xhr = new XMLHttpRequest();
    xhr.onload = renderSearchResultContainer;
    xhr.open('GET', './search?searchKey=' + e.target.value);
    xhr.onError = handle;
    xhr.send();
  }
  function handle (err) {
    document.getElementsByClassName('resultcontainer')[0].innerHTML = err;
  }
  function renderSearchResultContainer (e) {
    var recivedCustomers = JSON.parse(e.target.response);
    var customers = document.getElementsByClassName('resultcontainer')[0];
    customers.innerHTML = '';
    recivedCustomers.forEach(function (item) {
      var listItem = document.createElement('li');
      listItem.classList.add('customer');
      var customer = {
        img: document.createElement('img'),
        avatar: document.createElement('div'),
        name: document.createElement('div'),
        totalDebts: document.createElement('div')
      };
      customer.avatar.classList.add('avatar');
      customer.name.classList.add('cname');
      customer.totalDebts.classList.add('totaldebt');
      customer.img.src = 'images/unkown.png';
      customer.name.innerHTML = item.customername;
      customer.totalDebts.innerHTML = item.totalDebts;
      customer.avatar.appendChild(customer.img);
      listItem.appendChild(customer.avatar);
      listItem.appendChild(customer.name);
      listItem.appendChild(customer.totalDebts);
      customers.appendChild(listItem);
    });
  }
})();
