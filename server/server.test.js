const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {

  it('should return hello world response', (done) => {
    request(app)
      .get('/')
      .expect(404)
      .expect( (res) => {
        expect(res.body).toInclude({
          error: 'Page not found.'
        });
      })
      .end(done);
  });

  it('should return my user object', (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          name: 'Andrew',
          age: 25
        });
      })
      .end(done);
  });

});
