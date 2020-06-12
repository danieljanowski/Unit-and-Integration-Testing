var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('calculator should start with 0', function(){
    assert.equal(calculator.runningTotal, 0)
  })
  
  it('calculator should add 1 to 4 and get 5', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.add(1)
    assert.equal(calculator.runningTotal, 5)
  })

  it('calculator should subtract 4 from 7 and get 3', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.subtract(3)
    assert.equal(calculator.runningTotal, 4)
  })

  it('calculator should multiply 3 by 5 and get 15', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it('calculator should divide 21 by 7 and get 3', function(){
    calculator.numberClick(2)
    calculator.numberClick(1)
    calculator.operatorClick('/')
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it('calculator should concatenate multiple number button clicks', function(){
    calculator.numberClick(2)
    calculator.numberClick(5)
    calculator.numberClick(0)
    assert.equal(calculator.runningTotal, 250)
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(4)
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.numberClick(0)
    calculator.numberClick(0)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, -16)
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(4)
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.numberClick(0)
    calculator.numberClick(0)
    calculator.clearClick()
    calculator.numberClick(5)
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 29)
  })

});