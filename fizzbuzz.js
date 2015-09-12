var fizzBuzz = function(n) {
  var returnStr;
  if (n % 3 == 0 && n % 5 == 0) {
      returnStr = "FizzBuzz";
  }
  else if (n % 3 == 0) {
      returnStr = "Fizz";
  }
  else if (n % 5 == 0) {
      returnStr = "Buzz";
  }
  else {
      returnStr = ''.toString(n);
  }

  return returnStr;
};

module.exports = fizzBuzz;
