var jwt = require('jsonwebtoken');
module.exports = (user, cb) => {
  jwt.sign(user, process.env.SECRIT, function (err, token) {
    if (err) cb(err);
    cb(null, token);
  });
};
