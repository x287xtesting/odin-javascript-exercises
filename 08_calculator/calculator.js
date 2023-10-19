const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

/**
 * 
 * @param {[number]} arr 
 */
const sum = function (arr) {
  return arr.reduce((e1, e2) => e1 + e2, 0);
};


/**
 * 
 * @param {[number]} arr 
 */
const multiply = function (arr) {
  return arr.reduce((e1, e2) => e1 * e2);
};

const power = function (base, exp) {
  return Math.pow(base, exp);
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
