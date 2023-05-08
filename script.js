const ulList = document.createElement("ul");
document.body.appendChild(ulList);

for (let i = 1; i <= 10; i++) {
  const liItem = document.createElement("li");
  liItem.textContent = i;
  ulList.append(liItem);
}

const LastLi = ulList.querySelector("li:last-child");
LastLi.textContent = "Jestem ostatnim elementem";

LastLi.style.backgroundColor = "red";
LastLi.style.backgroundColor = "red";
LastLi.style.backgroundColor = "red";