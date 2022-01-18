const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(items) {
  return items.reduce((sum, item) => sum + item, 0);
};

const multiply = function(items) {
  return items.reduce((mult, item) => mult * item, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a === 0 || a === 1) {
    return 1;
  } else {
    return factorial(a - 1) * a;
  }
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
