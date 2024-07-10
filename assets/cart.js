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


var cartTable = document.getElementById('cartTable');
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key.startsWith('Product-')) {
    // console.log(localStorage.getItem(key));
    var ArrayOfProducts = JSON.parse(localStorage.getItem(key))
    // console.log(ArrayOfProducts[2]);
    cartTable.innerHTML += `<tr>
      <td><img src='${ArrayOfProducts[2]}' width='20px' height='20px' alt='Product Image'> ${ArrayOfProducts[0]}</td>
      <td class='amount' id='amount'>${ArrayOfProducts[3]} $</td>
      <td align='center'><button class='inc' id='inc'>+</button> 1<button class='dec' id='dec'>-</button></td>
    </tr>`;
    var inc = document.querySelectorAll('.inc')
    inc.forEach((btn,index)=>{
      btn.addEventListener('click', ()=>{
        
        
      })
    })
  }
}
var amount = document.querySelectorAll('.amount')
var amountArray = []
for (let i = 0; i < amount.length; i++) {
      amountArray.push(amount[i].innerHTML)
}

var totalAmount = 0;

for (let i = 0; i < amountArray.length; i++) {
        amountArray[i] = parseInt(amountArray[i])
        totalAmount += amountArray[i];
}

cartTable.innerHTML += `  <tr>
            <th style="border-left: 1px solid black;">TOTAL AMOUNT</th>
            <th id="totalAmount" style="border-right: 1px solid black;"></th>
            <th style="text-align:center;">Delivery Charges : 0 $</th>
         </tr>`


var totalAmountTable = document.getElementById('totalAmount')
totalAmountTable.innerText = `${totalAmount} $`

let icon = document.getElementById('icon')
let num = 1
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key.startsWith('Product-')) {
      icon.innerHTML = num++
  }
}