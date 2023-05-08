const liElements = document.querySelectorAll("li");
let number = 1;
for (let i = 0; i < liElements.length; i++) {
  liElements[i].textContent = number;
  liElements[i].dataset.id = number;
  number++;
}

const thirdLi = document.querySelector('[data-id="3"]');
console.log(thirdLi);
