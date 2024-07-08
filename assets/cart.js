const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

let cartProducts = {};

// Loop through all local storage items
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key.startsWith('product-')) {
    let productData = JSON.parse(localStorage.getItem(key));
    cartProducts[productData.index] = productData.title;
  }
}

// Print the cart products in a table
// let cartTable = document.getElementById('cartTable');
// let tableBody = cartTable.tBodies[0];
// for (let index in cartProducts) {
//     let num = 1
//     tableBody.innerHTML += `
//       <tr>
//         <td>${cartProducts[index]}</td>
//         <td><button id='inc' class='inc'>+</button> <p id='cartNumber' class='cartNumber'>${num}</p><button id='dec'>-</button></td>
//       </tr>
//     `;
//     let cartNumber = document.querySelectorAll('.cartNumber')
//     let inc = document.querySelectorAll('.inc')
//     inc.forEach((btn , index)=>{
//         btn.addEventListener('click' , ()=>{
//             console.log(index);
//             console.log(true);
//             cartNumber[index].innerHTML = num++
//         })
//     })
    
// }
let cartTable = document.getElementById('cartTable');
let tableBody = cartTable.tBodies[0];

for (let index in cartProducts) {
  tableBody.innerHTML += `
    <tr>
      <td>${cartProducts[index]}</td>
      <td><button class='inc'>+</button> <p class='cartNumber'>1</p><button>-</button></td>
    </tr>
  `;
}

let cartNumber = document.querySelectorAll('.cartNumber');
let incButtons = document.querySelectorAll('.inc');

for (let i = 0; i < incButtons.length; i++) {
  incButtons[i].addEventListener('click', () => {
    let currentValue = parseInt(cartNumber[i].innerHTML);
    cartNumber[i].innerHTML = currentValue + 1;
  });
}
// let cartTable = document.getElementById('cartTable');
// let tableBody = cartTable.getElementsByTagName('tbody')[0];
// let numArray = [];

// cartProducts.forEach((product, index) => {
//   numArray.push(1);
//   tableBody.innerHTML += `
//     <tr>
//       <td>${product}</td>
//       <td><button class='inc'>+</button> <p class='cartNumber'>${numArray[index]}</p><button>-</button></td>
//     </tr>
//   `;
// });

// let cartNumber = document.querySelectorAll('.cartNumber')
// let inc = document.querySelectorAll('.inc')
// inc.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     cartNumber[index].innerHTML = ++numArray[index];
//   })
// })