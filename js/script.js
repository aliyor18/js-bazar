let elForm = document.querySelector(".hero__form");
let elInput = elForm.querySelector(".form-control");
let elList = document.querySelector(".hero__info");
let lists = [];


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  let elItem = document.createElement("li");
  elList.appendChild(elItem);
  let elP = document.createElement("p");
  elItem.appendChild(elP);
  lists.push(elInput.value);
  elP.textContent = elInput.value;
  
  if (isNaN(elInput.value)) {
  } else {
    elP.textContent = "Iltimos so'z kiriting";
  }

})