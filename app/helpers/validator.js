exports.regFormValidator = (userSubmitedData) => {
  const regexEmailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = false;
  let message = {};
  if (userSubmitedData.username !== undefined && userSubmitedData.password !== undefined) {
    if (!userSubmitedData.username.trim().length < 3) {
      if (!userSubmitedData.password.trim().length < 6) {
        if (regexEmailValidator.test(userSubmitedData.email.trim())) {
          valid = true;
        } else {
          message.email = 'invalid user email';
        }
      } else message.password = 'password should not be less than 6 charachters';
    } else message.username = 'username should not be less than 3 charachters';
  } else message.emptyFileld = 'Please fill The form';
  return {valid: valid, errMsg: message};
};
exports.loginFormValidator = (submitedLoginForm) => {
  const regexEmailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = false;
  let message = {};
  if (regexEmailValidator.test(submitedLoginForm.email)) {
    valid = true;
  } else {
    message.email = 'invalid email address';
  }
  return {valid: valid, errMsg: message};
};
