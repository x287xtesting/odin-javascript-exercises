const helloWorld = require('./helloWorld');

describe('Hello World', function () {
  test('says "Hello, World!"', function () {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});

/**
 * Basically in Jest test file you write a describe function
 * which takes the name of the function, and another function as parameters
 * you put your tests in the other function,
 * those tests test the function you've described in the describe function
 * 
 * describe('Name of the function', function() {
 *  test('description of the test', function(){
 *    expect(yourFunction().toEqual(something);
 *  });
 * });
 */
