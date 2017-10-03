const request = require('supertest');
const app = require('../app/app.js');
// const app = require('../app/index.js');

const test = require('tape');
const token = process.env.EXAMTOKEN;
// request(app)
//   .get('/')
//   .expect('Content-Type', 'text/plain; charset=utf-8')
//   .expect(302)
//   .end(function (err, res) {
//     if (err) throw err;
//   });

test('GET /login', function (assert) {
  request(app)
      .get('/login')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end(function (err, res) {
        if (err) throw err;
        assert.end();
        // var expectedThings = {};
        // var actualThings = res.body;
        //
        // assert.error(err, 'No error');
        // assert.same(actualThings, expectedThings, 'Retrieve list of things');
        // assert.end();
      });
});

test('POST /login', function (assert) {
  var newUser = { email: 'aaa_2008azhar@hotmail.com', password: '44567'};
  request(app)
    .post('/login')
    .send(newUser)
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end(function (err, res) {
      assert.error(err, 'error');
      assert.equal(res.statusCode, 302, 'Status Code 302');// statuscode === 302
      assert.equal(res.headers.location, '/', 'redirect to homepage');// res.headers.location === '/'
    //  console.log(res.headers['set-cookie'][0].split('token=')[1].split(';')[0]);
      // assert.equal(res.headers['set-cookie'][0].split('token=')[1].split(';')[0], token, 'check the cookie');// res.cookie
      assert.end();
    });
});

test('Testing the the home page if the reqest have an authinticated token ', (t) => {
  request(app)
  .get('/')
  .set('Cookie', 'token=' + token)
  .expect(200)
  .expect('Content-Type', 'text/html; charset=utf-8')
  .end((err, res) => {
    t.error(err, 'error');
    t.equal(res.statusCode, 200, 'Status Code 200');
    t.end();
  });
});
test('Testing the the home page if the reqest have an unauthinticated token ', (t) => {
  request(app)
  .get('/')
  .set('Cookie', 'token=77' + token)
  .expect(500)
  .expect('Content-Type', 'text/html; charset=utf-8')
  .end((err, res) => {
    t.error(err, 'error');
    t.equal(res.headers['x-powered-by'], 'Express', 'Check the framework woh power the server');
    t.equal(res.statusCode, 500, 'Status Code 500');
    t.equal(res.text, 'Something broke! - Server Error 500', 'Should respons with error message');
    t.end();
  });
});
