const assert = require('assert');
const Math = require('../test/Math');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function() {
    //hook
  		beforeEach(function() {
  		value = 0
    });
 it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(3000);
      
      value = 0
      
       math.sum(5, 5, (value) => {
        expect(value).to.equal(10);
        done();
       });
    });
  it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
          name: 'Lucas Diniz'
        };
        const obj2 = {
          name: 'Lucas Diniz'
        };

       expect(obj).to.deep.equal(obj2);
    });
    it.only('Call res with sum and index values', function() {
      const req = {};
      const res = {
        load: sinon.spy()
      };
      const math = new Math();

      math.printSum(req, res, 5, 5);

      expect(res.load.args[0][1]).to.equal(10);
    });
});

