const tape = require('tape');
const {
  regFormValidator,
  loginFormValidator
} = require('../app/controller/cont_helpers/validator.js');

tape('Testing backend submited Resgestration form validator', (test) => {
  const form = {
    username: 'eslam',
    email: 'eslam@abed.com',
    password: 'eslam123456',
    address: 'salah El din st.'
  };
  let actual = regFormValidator(form).valid;
  let expected = true;
  test.equal(actual, expected, 'should return true (the form is valid)');
  form.email = 's';
  actual = regFormValidator(form).valid;
  expected = false;
  test.equal(actual, expected, 'should return false (the form is invalid)');
  test.end();
});

tape('testing the login form reicived data - backend validator test', (test) => {
  let form = {email: 'myEmail@isValid.com'};
  let actual = loginFormValidator(form).valid;
  let expected = true;
  test.equal(actual, expected, 'SHould return true the email address is valid');
  form = {email: 'myEmailNotValid.com'};
  actual = loginFormValidator(form).valid;
  expected = false;
  test.equal(actual, expected, 'SHould return false the email address is invalid');
  test.end();
});
