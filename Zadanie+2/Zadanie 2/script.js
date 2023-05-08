const Paragraf1 = document.querySelector(".p1");
const Paragraf2 = document.querySelector(".p2");
const Button1 = document.querySelector(".btn1");
const Button2 = document.querySelector(".btn2");
const Square = document.querySelector(".square");

const Fun1 = () => {
  console.log("cześć");
};

const Fun2 = () => {
  Square.style.backgroundColor = "red";
};

const Fun3 = () => {
  Square.style.backgroundColor = "blue";
};

const Fun4 = () => {
  Paragraf1.classList.toggle("show");
  Paragraf2.classList.toggle("show");
};

Button1.addEventListener("dblclick", Fun1);
Square.addEventListener("mouseover", Fun2);
Square.addEventListener("mouseleave", Fun3);
Button2.addEventListener("click", Fun4);
