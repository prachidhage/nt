nano test.js
var request = require('supertest');
var app = require('.../index.js');describe('GET /', function () {
it('respond with hello world', function(done) {
request(app).get('/').expect('hello joker', done);
});
});
