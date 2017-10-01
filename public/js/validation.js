var ckEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var usernameRegex = /^[a-zA-Z0-9\-]+$/;
var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirm = document.getElementById('confirm');
var address = document.getElementById('address');
var phone = document.getElementById('phone');
var validName = document.getElementById('validName');
var validPass = document.getElementById('validPass');
var validConf = document.getElementById('validConf');
var validEmail = document.getElementById('validEmail');
var validAdd = document.getElementById('validAdd');
var validPhone = document.getElementById('validPhone');
var strength = document.getElementById('strength');

function passwordChanged () {
  var strongRegex = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$', 'g');
  var mediumRegex = new RegExp('^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$', 'g');
  var enoughRegex = new RegExp('(?=.{6,}).*', 'g');
  if (password.value.length === 0) {
    strength.innerHTML = 'Type Password... ';
  } else if (enoughRegex.test(password.value) === false) {
    strength.innerHTML = 'More Characters... ';
  } else if (strongRegex.test(password.value)) {
    strength.innerHTML = '<span style="color:green">Strong! </span>';
  } else if (mediumRegex.test(password.value)) {
    strength.innerHTML = '<span style="color:orange">Medium! </span>';
  } else {
    strength.innerHTML = '<span style="color:red">Weak! </span>';
  }
}

password.addEventListener('keyup', passwordChanged);

if (username) {
  username.addEventListener('focusout', function () {
    var nvalue = username.value.trim();
    if (nvalue === '') {
      username.style.border = '1px solid red';
      validName.innerHTML = "<span style='color:red'>Please enter your username</span>";
    } else {
      if (!usernameRegex.test(nvalue)) {
        username.style.border = '1px solid red';
        validName.innerHTML = "<span style='color:red'>Your username is not valid. Only characters A-Z, a-z, numbers 0-9, and '-' are  acceptable.</span>";
      } else {
        username.style.border = '1px solid green';
        validName.innerHTML = ' ';
<<<<<<< HEAD
        // validName.innerHTML = '<span>Your username is valid :)</span>';
=======
>>>>>>> c761a660f467bace154a2418b7be2ed2e9f70d2f
      }
    }
  });
}

email.addEventListener('focusout', function () {
  var evalue = email.value.trim();
  if (evalue === '') {
    email.style.border = '1px solid red';
    validEmail.innerHTML = "<span style='color:red'>Please enter your email</span>";
  } else {
    if (!ckEmail.test(evalue)) {
      email.style.border = '1px solid red';
      validEmail.innerHTML = "<span style='color:red'>You must enter a valid email address.</span>";
    } else {
      email.style.border = '1px solid green';
      validEmail.innerHTML = ' ';
<<<<<<< HEAD
    //  validEmail.innerHTML = '<span>Your email is valid :)</span>';
=======
>>>>>>> c761a660f467bace154a2418b7be2ed2e9f70d2f
    }
  }
});
password.addEventListener('focusout', function () {
  var pval = password.value;
  if (pval === '') {
    password.style.border = '1px solid red';
    validPass.innerHTML = "<span style='color:red'>Please enter password</span>";
  } else if (pval.trim() === '') {
    password.style.border = '1px solid red';
    validPass.innerHTML = "<span style='color:red'>Your password should not be spaces</span>";
  } else if (pval.trim() < 6) {
    password.style.border = '1px solid red';
    validPass.innerHTML = "<span style='color:red'>Your password should not be less than 6 charachters</span>";
  } else {
    password.style.border = '1px solid green';
    validPass.innerHTML = ' ';
<<<<<<< HEAD
    // validPass.innerHTML = '<span>Accepted password :)</span>';
=======
>>>>>>> c761a660f467bace154a2418b7be2ed2e9f70d2f
  }
});

if (confirm) {
  confirm.addEventListener('focusout', function () {
    var cval = confirm.value;
    if (cval === '') {
      confirm.style.border = '1px solid red';
      validConf.innerHTML = "<span style='color:red'>Please confirm your password</span>";
    } else if (cval.trim() === '') {
      confirm.style.border = '1px solid red';
      validConf.innerHTML = "<span style='color:red'>Your confirm password should not be spaces</span>";
    } else if (cval.trim() < 6) {
      confirm.style.border = '1px solid red';
      validConf.innerHTML = "<span style='color:red'>Your confirm password should not be less than 6 charachters</span>";
    } else {
      if (password.value !== confirm.value) {
        confirm.style.border = '1px solid red';
        validConf.innerHTML = "<span style='color:red'>Your password and confirm password should be the same !</span>";
      } else {
        confirm.style.border = '1px solid green';
        validConf.innerHTML = ' ';
<<<<<<< HEAD
        // validConf.innerHTML = '<p>It is ok :)</p>';
=======
>>>>>>> c761a660f467bace154a2418b7be2ed2e9f70d2f
      }
    }
  });
}

if (address) {
  address.addEventListener('focusout', function () {
    var avalue = address.value.trim();
    if (avalue === '') {
      address.style.border = '1px solid red';
      validAdd.innerHTML = "<span style='color:red'>Please enter your address</span>";
    } else {
      if (!usernameRegex.test(avalue)) {
        address.style.border = '1px solid red';
        validAdd.innerHTML = "<span style='color:red'>Your address is not valid. Only characters A-Z, a-z, numbers 0-9, and '-' are  acceptable.</span>";
      } else {
        address.style.border = '1px solid green';
        validAdd.innerHTML = ' ';
<<<<<<< HEAD
        // validAdd.innerHTML = '<span>Your address is valid :)</span>';
=======
>>>>>>> c761a660f467bace154a2418b7be2ed2e9f70d2f
      }
    }
  });
}

if (phone) {
  phone.addEventListener('focusout', function () {
    var pvalue = phone.value.trim();
    if (pvalue === '') {
      phone.style.border = '1px solid red';
      validPhone.innerHTML = "<span style='color:red'>Please enter your phone no.</span>";
    } else {
      if (!phoneRegex.test(pvalue)) {
        phone.style.border = '1px solid red';
        validPhone.innerHTML = "<span style='color:red'>Your phone is not valid.</span>";
      } else {
        phone.style.border = '1px solid green';
        validPhone.innerHTML = ' ';
<<<<<<< HEAD
        // validPhone.innerHTML = '<p>Your phone is valid :)</p>';
=======
>>>>>>> c761a660f467bace154a2418b7be2ed2e9f70d2f
      }
    }
  });
}
