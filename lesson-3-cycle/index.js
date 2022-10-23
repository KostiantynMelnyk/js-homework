// * Task 1 - Ask the user age and get his age status
//- Constant 
const TEENAGER = 17;
const CHILD = 11;
const ADULT = 59;
//- Dynamic
let yearsOld = +prompt('How old are you?', 0);
//- Cycle for definition age status
while (yearsOld == NaN || yearsOld < 0) {
  yearsOld = +prompt('Enter correct age', 0);
  console.log(yearsOld);
} 

if (yearsOld <= CHILD) {
  console.log('Child');
} else if (yearsOld <= TEENAGER) {
  console.log('Teenager');
} else if (yearsOld <= ADULT) {
  console.log('Adult');
} else {
  console.log('Pensioner');
}

// * Task 2 - Ask the user number from 0 to 9 and bring it a special character, which is located on this key (1!, 2 @, 3 #, etc.) 
//- Ask number 
const symbol = +prompt('Enter any number from 0 to 9');
//- Answer symbol
switch (symbol) {
  case 0:
    console.log(')')
    break;
  case 1:
    console.log('!');
    break;
  case 2:
    console.log('@');
    break;
  case 3:
    console.log('#');
    break;
  case 4:
    console.log('$');
    break;
  case 5:
    console.log('%');
    break;
  case 6:
    console.log('^');
    break;
  case 7:
    console.log('&');
    break;
  case 8:
    console.log('*');
    break;
  case 9:
    console.log(')');
    break;
}

// * Task 3 - Calculate the sum of all numbers in a given range
// Ask first point of raqnge
const rangeFrom = +prompt('Enter first number');
// Ask second point of raqnge 
const rangeTo = +prompt('Enter last number');  
let resultAdding = 0;

for (let i = rangeFrom; i <= rangeTo; i++) {
  resultAdding += i; 
}
console.log(resultAdding);

// * Task 4 - Ask the user two number and find the largest common divisor
// Ask first number
const num1 = +prompt('Enter first number'); 
// Ask second number
const num2 = +prompt('Enter last number');
let resultDivision;

for (let i = 1; i <= Math.min(num1, num2); i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    resultDivision = i;
  }
}
console.log(resultDivision);

// * Task 5 - Ask the user number and bring out all the divisors of this number 
const number = +prompt("Enter your number");

for (let i=1; i <= number; i++) {
  if (number % i == 0) {
    console.log(i);
  }
}

// * Task 6 - Ask the user the amount of purchase and withdraw the amount to the discount payment:
// * from 200 to 300 - the discount will be 3%;
// * from 300 to 500 - 5%;
// * from 500 and above - 7%.
// Ask user sum of purchase
const sumOfPurchase = +prompt('Enter sum of purchase');
// Poits for define discount
const discountPrice = {
  lowPrice: 200,
  middlePrice: 300,
  highPrice: 500,
}

let amountResult = 0;
// Function calculate discount
const calcDiscount = (item) => {
  const discount = sumOfPurchase / 100 * item;
  return discount;
}
// Сomparison points
if (sumOfPurchase >= discountPrice.lowPrice && sumOfPurchase <= discountPrice.middlePrice) {
  amountResult = sumOfPurchase - calcDiscount(3); 
} else if (sumOfPurchase >= discountPrice.middlePrice && sumOfPurchase <= discountPrice.highPrice) {
  amountResult = sumOfPurchase - calcDiscount(5);
} else if (sumOfPurchase >= discountPrice.highPrice) {
  amountResult = sumOfPurchase - calcDiscount(7);
} else {
  console.log(`Stable price without discount: ${sumOfPurchase}`);
}
// Result in console
console.log(`Amount result ${amountResult}`)

// * Multiplication table 
let table = "";
for (let x = 1; x <= 9; x++) {
  for (let y = 1; y <= 9; y++) {
    table += " " + x * y;
    if (x * y < 10) {
      table += " ";
    }
  }
  console.log(table);
  table = "";
};







