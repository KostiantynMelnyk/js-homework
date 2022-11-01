// * Create a shopping list array. Each array element is an object that contains product name, quantity and bought or not, price per unit of goods, sum
const shopingList = [
  {
    name: "orange",
    quantity: 10,
    productPrice: 5,
    availability: true,
  },
  {
    name: "mandarin",
    quantity: 25,
    productPrice: 3,
    availability: true,
  },
  {
    name: "pineapple",
    quantity: 30,
    productPrice: 8,
    availability: false,
  },
  {
    name: "banana",
    quantity: 15,
    productPrice: 5,
    availability: false,
  },
  {
    name: "kiwi",
    quantity: 40,
    productPrice: 4,
    availability: true,
  },
];
// Function for sort from false to true
const sortingList = (a, b) => (a.availability > b.availability ? 1 : -1);
// Method sort
shopingList.sort(sortingList);
console.log(shopingList);
// Fun for but product
const nameOfProduct = prompt('Which product are you want buy?') 

shopingList.forEach((item) => {
  if (item.name == nameOfProduct) {
    item.availability = true;
  }
});
console.log(shopingList);

// * DOM
// Function for create element
const createElement = (item) => document.createElement(item);
// Take element from HTML by ID 
const listBlock = document.getElementById("js-shoping-list");
// Create tag 'ol' 
const ol = createElement("ol");
// Add class for stilization in future
ol.classList.add('shoping-list__list');
// Function for create list and show in HTML
const showFruits = () => {
  // forEach for set parametr 'item' and call element which i need 
  shopingList.forEach((item) => {
    const li = createElement("li");
    li.innerText = `Name: ${item.name} \n Price: ${item.productPrice} $`;
    li.classList.add('shoping-list__item')
    ol.appendChild(li);
  });
  // Push 'ol' inside HTML element.
  listBlock.appendChild(ol);
};
showFruits();
// Get element from HTML by ID
const modalWindow = document.getElementById('js-modal-window');
// Create button
const modalBtn = createElement('button');
// Create span
const btnSpan = createElement('span');
//
modalBtn.classList.add('button')
// Span text
btnSpan.textContent = 'Open modal window';
// Push span to button
modalBtn.appendChild(btnSpan);
// Push button to HTML element
modalWindow.appendChild(modalBtn);

modalBtn.addEventListener('click', () => {
  // Create div for open modal window
  const div = createElement('div');
  // Add class to div
  div.classList.add('modal-window__open');
  // Create span for write some text inside
  const span = createElement('span');
  // Past some text inside span
  span.textContent = 'Some content';
  // Add span inside div
  div.appendChild(span);
  // Create btn for close modal window 
  const closeBtn = createElement('button');
  // Span for button
  const closeSpan = createElement('span');
  // Add class to button
  closeBtn.classList.add('button');
  // Text for span
  closeSpan.textContent = 'Close modal window';
  // Push span to button
  closeBtn.appendChild(closeSpan);
  // Add div to modal window
  modalWindow.appendChild(div);
  // Add button to open modal window
  div.appendChild(closeBtn);
  modalBtn.disabled = true;
  closeBtn.addEventListener('click', () => {
    div.remove();
    modalBtn.disabled = false;
  });
});
