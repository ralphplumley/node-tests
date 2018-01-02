const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    })
  });

  it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(4, (sum) => {
      expect(sum).toBe(16).toBeA('number');
      done();
    })
  });

});


it('should verify first and last names are set', () => {
  var person = {
    age: 35,
    location: 'Detroit'
  };

  var res = utils.setName(person, 'Ralph Plumley');

  expect(res).toInclude({
    firstName: 'Ralph',
    lastName: 'Plumley'
  });
});