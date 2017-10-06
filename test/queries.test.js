const tape = require('tape');
const {signUpNewUser,
isUser,
findCustomer,
addCustomer,
getCustomerDebts,
getCustomer,
getAllDebts,
storeDebt
} = require('../app/models/queries/db_queries.js');

tape('Testing the isUser Func - check if a given user is exist', (t) => {
  isUser('iah-93@hotmail.com', (err, result) => {
    t.notOk(err);
    t.equal(result.username, 'Eslam Abed ELRAHMAN', 'should return true if the returned username is eslam');
    t.end();
  });
});
tape('Testing the isUser Func - check if a given user is exist', (t) => {
  isUser('NotExsit@database.com', (err, result) => {
    t.notOk(err);
    t.equal(result, undefined, 'should return undefined for not exist users');
    t.end();
  });
});
tape('Testing the signUpNewUser fucntion to sign up an existing user', (t) => {
  const sampleUser = {
    username: 'eslam',
    email: 'eslam@abed.com',
    password: 'eslam123456',
    address: 'salah El din st.'
  };
  signUpNewUser(sampleUser, (err, result) => {
    t.equal(
      err.message,
      'duplicate key value violates unique constraint "users_email_key"',
      'should throw an Error for duplicates emails'
    );
    t.end();
  });
});
tape('Testing the signUpNewUser fucntion to sign up an existing user', (t) => {
  const RandomEmail = Date.now().toString() + '@abed.com';
  const sampleUser = {
    username: 'eslam',
    email: RandomEmail,
    password: 'eslam123456',
    address: 'salah El din st.'
  };
  signUpNewUser(sampleUser, (err, result) => {
    t.notOk(err);
    t.equal(typeof result, 'object', 'shoule successful sign Up the User if he is unique');
    t.equal(result.email, sampleUser.email, `should sign up the user ${sampleUser.username} for unique email ${sampleUser.email}`);
    t.end();
  });
});
tape('Testing findCustomer Function to search between customers', (t) => {
  const key = '';
  const userId = 28;
  findCustomer(key, userId, (err, reslut) => {
    t.notOk(err);
    t.equal(reslut.rows.length > 0, true, 'Shoulde return alist of customers for the userid  6');
    t.end();
  });
});
tape('Testing findCustomer Function to search between customers', (t) => {
  const userId = 28;
  const customer = {
    name: 'saral',
    address: '124 main ST.',
    phone: '05422424565'
  };
  addCustomer(customer, userId, (err, reslut) => {
    t.notOk(err);
    t.equal(typeof reslut, 'object', 'it should return an customer object with customer proberties');
    t.end();
  });
});
tape('Testing the getCustomerDebts to get all the debts for specific customer', (t) => {
  const customerId = 6;
  getCustomerDebts(customerId, (err, result) => {
    t.notOk(err);
    t.equal(result.rows.length > 0, true, 'Sould return and array of all customer with id 6  debts');
    t.end();
  });
});
tape('Testing the getCustomer to a specific customer details', (t) => {
  const customerId = 6;
  const userId = 0;
  getCustomer(customerId, userId, (err, result) => {
    t.notOk(err);
    t.equal(result.rows[0], undefined, 'no existing customer in the user customers list');
    t.end();
  });
});
tape('Testing the getCustomer to a specific customer details', (t) => {
  const customerId = 6;
  const userId = 28;
  getCustomer(customerId, userId, (err, result) => {
    t.notOk(err);
    t.equal(result.rows[0].customername, 'Ysgasdasdad', 'should return the user object the match the id\'s');
    t.end();
  });
});
tape('Testing the getAllDebts to get the summation of all debts fot specific user', (t) => {
  const userId = 28;
  getAllDebts(userId, (err, result) => {
    t.notOk(err);
    t.equal(typeof result.rows[0].sum, 'number', 'should return the sum  (a number) of all debts of all custmers');
    t.end();
  });
});
tape('Testing the storeDebt to store a single debt', (t) => {
  const record = [{type: `halawa`, price: 55, quantity: 2}];
  const customerId = 6;
  storeDebt(record, customerId, (err, result) => {
    t.notOk(err);
    t.equal(result.rows[0].debt_price, 55, 'should insert and return the sum of the inserted debt');
    t.end();
  });
});
tape('Testing the storeDebt to store a multy debts', (t) => {
  const records = [
  {type: `بسكوت`, price: 4, quantity: 1},
  {type: `عصير`, price: 2, quantity: 4},
  {type: `شوكولا`, price: 8, quantity: 2}];
  const customerId = 6;
  storeDebt(records, customerId, (err, result) => {
    t.notOk(err);
    t.equal(result.rows.length > 0, true, 'An Array of all debts ,checking the length of the result');
    t.end();
  });
});
tape('Testing the storeDebt to store a multy debts', (t) => {
  const records = [
  {type: `بسكوت`, price: 4, quantity: 1},
  {type: `عصير`, price: 2, quantity: 4},
  {type: `شوكولا`, price: 8, quantity: 2}];
  const customerId = 6;
  storeDebt(records, customerId, (err, result) => {
    t.notOk(err);
    t.equal(result.rows[2].debt_price, 8, 'Checking if the returned values matches the the inserted ones values');
    t.end();
  });
});
