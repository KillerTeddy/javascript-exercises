const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  if(array.length === 0) return 0
	const totalSum = array.reduce((total, currentValue) => 
    total + currentValue)
    return totalSum
}

const multiply = function(array) {
  if(array.length === 0) return 0
	const totalMultiplication = array.reduce((total, currentValue) => 
    total * currentValue)
    return totalMultiplication
}

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
  let result = num
  if (num === 0 || num === 1) return 1
  while (num > 1){
    num--
    result *= num
  }
	return result
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
