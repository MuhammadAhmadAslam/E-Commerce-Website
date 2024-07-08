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
// var cartTable = document.getElementById('cartTable')
// for (let i = 0; i < localStorage.length; i++) {
//   var storedArray = localStorage.key(i)
//   let key = localStorage.key(i);
//   if (key.startsWith(`Product-`)) {
//     console.log(true);
//     const parsedArray = JSON.parse(storedArray);
//   console.log(parsedArray[0]); // outputs the title
//   console.log(parsedArray[1]); // outputs the index
//   console.log(parsedArray[2]); // outputs the images
//   console.log(parsedArray[3]);
//     cartTable.innerHTML += `<tr>
//     <td>${localStorage.getItem(key[0])}</td>`
//   }
// }
var cartTable = document.getElementById('cartTable');
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key.startsWith('Product-')) {
    console.log(localStorage.getItem(key));
    
    cartTable.innerHTML += `<tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>`;
  }
}