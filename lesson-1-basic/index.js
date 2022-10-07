/* My console */
const MY_NAME = 'Kostya';
/* Current year */
const CURRENT_YEAR = new Date().getFullYear();
/* Currently course */
const CURRENCY = 37;

console.log(CURRENT_YEAR);

/* For interaction with user (Name) */
const yourName = prompt('Write your name');
/* For answer to user (Hello, 'user-name'*/
alert(`Hello, ${yourName}`);
/* For check actions in console */
console.log(MY_NAME, 'Hello, ' + yourName);


/* For interaction with user (Calculate current age from year of birth) */
const yearOfBirth = prompt('Write your year of birth', '');
/* Check & inform incorrect entry */
if (yearOfBirth.replace(/\d/g, '').length) alert('You introduced not only numbers');
/* Calc current age */
const calcAge = CURRENT_YEAR - yearOfBirth;
/* Alert for inform current age for user */
alert(`Your age is ${calcAge}`);
/* For check actions in console */
console.log(MY_NAME, 'Your age is ' + calcAge);


/* For interaction with user (Calculate perimeter of square by one side */
const sideOfSquare = prompt('Indicate the side of the square', '');
/* Check & inform incorrect entry */
if (sideOfSquare.replace(/\d/g, '').length) alert('You introduced not only numbers');
/* Calculation perimeter */
const calcPerimeter = sideOfSquare * 4;
/* Alert for inform perimeter of square */
alert(`Perimeter of square = ${calcPerimeter}`);
/* For check actions in console */
console.log(MY_NAME, 'Perimeter of square = ' + calcPerimeter);


/* For interaction with user (Calculate speed between 2 points) */
const distance = prompt('Write your distance between points in kilometer', '');
const time = prompt('How long time you need for passing distance in hours', '');
/* Check & inform incorrect entry */
if (time,distance.replace (/\d/g, '').length) alert ('You introduced not only numbers');
/* Calculate speed between 2 points */
const calcSpeed = distance / time;
/* Alert for inform current speed */
alert(`You must move with speed ${calcSpeed} km/hour`)
/* For check actions in console */
console.log(MY_NAME, 'You must move with speed ' + calcSpeed + ' km/hour');


/* For interaction with user (Calculate currency from $ to UAH */
const dollar = prompt('How many USD do you want to transfer to UAH?', '');
/* Check & inform incorrect entry */
if (dollar.replace (/\d/g, '').length) alert ('You introduced not only numbers');
/* Calc $ to UAH */
const calcUah = dollar * CURRENCY;
/* Alert for inform user about result */
alert(`${dollar} $  -  ${calcUah} UAH`);
/* For check actions in console */
console.log(MY_NAME, 'From $ to UAH: ' + calcUah + 'UAH');

const div = document.createElement('div');

div.classList.add('information');

const htmlName = `
  <div>Your name: ${yourName}</div>
  <div>Your age: ${calcAge}</div>
  <div>Square perimeter: ${calcPerimeter}</div>
  <div>You need move: ${calcSpeed} km/hour</div>
  <div>Your ballance: ${calcUah} UAH</div>
`;

div.innerHTML = htmlName;

document.body.appendChild(div);

document.body.appendChild(div);













