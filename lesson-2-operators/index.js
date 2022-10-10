// * Task 1 - Add 2 numbers and get the mathematically correct answer
//- Calculation 2 numbers
const calc = 0.1 + 0.2;
//- Via method "toFixed", number has been rounded and get the mathematically correct answer
const result = calc.toFixed(1);
//- For check actions in console
console.log(`Task 1: ${result}`);

// * Task 2 - Add string '1' and number 2 (both operands must be in variables) and get the mathematically correct answer
const num1 = +'1';
const num2 = 2;
//- Calculation 1 string and 1 number
const calcNum = num1 + num2;
//- For check actions in console
console.log(`Task 2: ${calcNum}`);

// * Task 3 - The user specifies the volume of the flash drive in GB. The program should calculate how many files with a size of 820 MB fit on a flash drive.
//- Variable with fixed storage 
const FIXED_STORAGE = 0.82;
//- Ask user 'How many GB is your flash drive?'
const flashDrive = +prompt('How many GB is your flash drive?', '');
//- Calculation file capacity 
const calcStorage = flashDrive / FIXED_STORAGE;
//- Round the result down
const resultStorage = Math.floor(calcStorage);
//- For inform user about result
alert(`Your flash drive will fit ${resultStorage} files of 820 Mb`);
//- For check actions in console
console.log(`Task 3: Your flash drive will fit ${resultStorage} files of 820 Mb`);

// * Task 4 - The user enters the amount of money in the wallet and the price of one chocolate bar. The program displays how many chocolates the user can buy and how much change he has left.
//- Ask user ballance and quantity of chocolate
const userBallance = +prompt('Enter your ballance', '');
const chocolatePrice = +prompt('Enter chocolate price', '');
//- Calc how much chocolate user can buy
const calcQuantity = userBallance / chocolatePrice;
//- Round the result down
const resultQuantity = Math.floor(calcQuantity);
//- Calc how much money user will be have after 
const calcRemind = userBallance - (chocolatePrice * resultQuantity);
//- Round mathematically correct answer
const resultRemind = calcRemind.toFixed(2);
//- For inform user about result
alert(`You can buy ${resultQuantity} chocolate. Your ballance: ${resultRemind}`);
//- For check actions in console
console.log(`Task 4: You can buy ${resultQuantity} chocolate. Your ballance: ${resultRemind}`);

// * Task 5 - Ask the user for a three-digit number and display it backwards.
const reverseNumber = (Math.abs(+prompt())).toString().split('').reverse().join(''); /* reverseAll, splice, slice - read*/
//- For check actions in console
console.log(reverseNumber);















