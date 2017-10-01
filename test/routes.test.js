const request = require('supertest');
const test = require('tape');
const app = require('../app/app.js');
// const search = require('../app/controller/search.js');
var mocha = require('mocha');
const { describe, it} = require('mocha');

//
// var describe = mocha.describe;
// var it = mocha.it;

request(app)
.get('/')
.expect('Content-Type', 'text/plain; charset=utf-8')
.expect(302) // Because the tester is not uthenticated to login
.end(function (err, res) {
  if (err) throw err;
});

test('logout test', (t) => {
  request(app)
      .get('/logout')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          t.notOk(false);
        } else {
          t.equal(res.status, 200, 'equal');
        }
        t.end();
      });
});

test('search data test', (t) => {
  var obj = {customername: 'hani'};
  request(app)
      .post('/search')
      .send(obj)
      .expect(302)
      .end(function (err, res) {
        if (err) {
          t.notOk(err);
        } else {
          console.log('hani', res);
          t.equal(res.body.customername, 'hani', 'equal');
        }
        t.end();
      });
});

// describe('/search', function () {
//   it('respond with json', function (done) {
//     request(app)
//       .get('/')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, done);
//   });
// });
