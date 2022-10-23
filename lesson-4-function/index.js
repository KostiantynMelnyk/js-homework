// * Task 1 - All possible ways to create function 
// Declaration
function funName (args) {
  // function body;
};

// Expration 
const varName = function (args) {
  // function body;
};

// Arrow 
const varName1 = (args) => {
  // function body;
};

// * Task 2 - Function that will derive the number of specified arguments
const argsQuantity = function () {
  let test = 0;
  for (let i = 0; i < arguments.length; i++) {
    test = arguments.length;
  }
  console.log(test);
};
argsQuantity(1, 10, 20, 10, 50);

// * Task 3 - Function that accepts 2 numbers and returns:
// -1 if the first number is less than the second;
// 1 - if the first number is larger than the second;
// 0 - if the numbers are equal. 
const comparisonNum = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1
  } else {
    return 0
  }
};
console.log(comparisonNum(2, 4));
console.log(comparisonNum(4, 2));
console.log(comparisonNum(2, 2));

// * Task 4 - Function that takes three separate digits and converts them into one number. For example: numbers 1, 4, 9 will be transformed into a number 149.
const numToString = (a, b, c) => {
  let calcnumToString = a.toString() + b.toString() + c.toString();
  console.log(calcnumToString);
};
console.log(numToString(1, 5, 9));

// * Task 5 - Function that takes the length and width of the rectangle and calculates its area. If 1 parameter was transmitted to the function, it calculates the area of the square.
const calcSquare = (a, b) => {
  if (a && b) {
    return a * b;
  } else if (a || b) {
    return a ** 2 || b ** 2;
  }
}; 
console.log(calcSquare(5, 10));
console.log(calcSquare(12));