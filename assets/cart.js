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

// function MakingCart(){
// var cartTable = document.getElementById('cartTable');
// var cartMultiplyArray = [];
// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   if (key.startsWith('Product-')) {
//     var ArrayOfProducts = JSON.parse(localStorage.getItem(key))
//     cartTable.innerHTML += `<tr>
//       <td><img src='${ArrayOfProducts[2]}' width='20px' height='20px' alt='Product Image'> ${ArrayOfProducts[0]}</td>
//       <td class='amount' id='amount'>${ArrayOfProducts[3]} $</td>
//       <td align='center'><input type="text" maxlength="2" id="cartInput" class='cartInput' value='5'></td>
//     </tr>`;
//     var cartInput = document.getElementById('cartInput')
//     cartMultiplyArray.push(cartInput.value * ArrayOfProducts[3])
//   }
// }
// }
// MakingCart()



// function UpdatingTotalAmount(){
// var amount = document.querySelectorAll('.amount')

// var amountArray = []
// for (let i = 0; i < amount.length; i++) {
//       amountArray.push(amount[i].innerHTML)
// }

// var totalAmount = 0;

// for (let i = 0; i < amountArray.length; i++) {
//         amountArray[i] = parseInt(amountArray[i])
//         totalAmount += amountArray[i];
// }

// cartTable.innerHTML += `  <tr>
//             <th style="border-left: 1px solid black;">TOTAL AMOUNT</th>
//             <th id="totalAmount" style="border-right: 1px solid black;"></th>
//             <th style="text-align:center;">Delivery Charges : 0 $</th>
//          </tr>`


// var totalAmountTable = document.getElementById('totalAmount')
// totalAmountTable.innerText = `${totalAmount} $`

// }


// UpdatingTotalAmount()

function MakingCart(){
  var cartTable = document.getElementById('cartTable');
  var cartMultiplyArray = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith('Product-')) {
      var ArrayOfProducts = JSON.parse(localStorage.getItem(key))
      cartTable.innerHTML += `<tr>
        <td><img src='${ArrayOfProducts[2]}' width='20px' height='20px' alt='Product Image'> ${ArrayOfProducts[0]}</td>
        <td><input type="text" maxlength="2" class='cartInput' value='1' required></td>
        <td align='center' class='amount'>${ArrayOfProducts[3]} $</td>
      </tr>`;
    }
  }
  cartTable.innerHTML += `  <tr>
  <th style="text-align:center;">Delivery Charges : 0 $</th>
            <th style="border-left: 1px solid black;">TOTAL AMOUNT</th>
            <th id="totalAmount" align='right' style="border-right: 1px solid black; text-align: center;"></th>
         </tr>`;
  
  var cartInputs = cartTable.querySelectorAll('.cartInput');
  for (let i = 0; i < cartInputs.length; i++) {
    cartInputs[i].addEventListener('input', function() {
      UpdatingTotalAmount();
    });
  }
}
MakingCart()

function UpdatingTotalAmount(){
  var amounts = document.querySelectorAll('.amount')
  var cartInputs = document.querySelectorAll('.cartInput')
  var totalAmount = 0;
  
  for (let i = 0; i < amounts.length; i++) {
    totalAmount += parseFloat(cartInputs[i].value) * parseFloat(amounts[i].innerHTML);
  }


  

  var totalAmountTable = document.getElementById('totalAmount')
  totalAmountTable.innerText = `${totalAmount} $`
}

UpdatingTotalAmount()















let icon = document.getElementById('icon')
let num = 1
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key.startsWith('Product-')) {
      icon.innerHTML = num++
  }
}