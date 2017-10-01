const request = require('supertest');
const app = require('../app/app.js');
// const app = require('../app/index.js');

const test = require('tape');
const token = process.env.EXAMTOKEN;
console.log(token);
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
        var expectedThings = {};
        var actualThings = res.body;

        assert.error(err, 'No error');
        assert.same(actualThings, expectedThings, 'Retrieve list of things');
        assert.end();
      });
});

test('POST /login', function (assert) {
  var newThing = { email: 'aaa_2008azhar@hotmail.com', password: '44567'};
  request(app)
    .post('/login')
    .send(newThing)
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end(function (err, res) {
      var actualThing = res.body;

      assert.error(err, 'No error');
      assert.same(actualThing, {}, 'Create a new thing');
      assert.end();
    });
});
