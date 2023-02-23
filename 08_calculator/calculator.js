const add = function() {
  let sum = 0;
	for (let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
};

const subtract = function() {
  let difference = arguments[0];
    difference -= arguments[1];
  return difference;
};

const sum = function() {
	let final = arguments[0].reduce((partialSum, a) => partialSum + a, 0);
  return final;
};

const multiply = function() {
  let product = 1;
  let nums = arguments[0]
	for (let i = 0; i < nums.length; i++){
    product *= nums[i];
  }
  return product;
};

const power = function() {
	return(Math.pow(arguments[0], arguments[1]));
};

const factorial = function() {
  let product = 1;
  for(let i = 0; i < arguments[0]; i++){
    product *= i+1
  }
  return product;
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
