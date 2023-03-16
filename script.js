// const color = "blue";
// const newColor = "green";

// if (color === newColor) {
//   console.log("Kolory się zgadzają");
// } else {
//   console.log("Kolory się nie zgadzają");
// }

// const x = 100;
// const y = 50;

// if (x > y) {
//   console.log(`${x} > ${y}`);
// } else if (x === y) {
//   console.log(`${x} = ${y}`);
// } else if (x < y) {
//   console.log(`${x} < ${y}`);
// }

// switch

// const promo = "20%";

// switch (promo) {
//   case "10%":
//     console.log("dziś mamy 10% RABATU");
//     break;
//   case "20%":
//     console.log("dziś mamy 20% RABATU");
//     break;
//   case "30%":
//     console.log("dziś mamy 30% RABATU");
//     break;
//   default:
//     console.log("error mother fucker");
// }

// operator warunkowy

// const x = 10;
// const check =
//   x % 2 == 0
//     ? console.log("X jest parzyste")
//     : console.log("X jest nieparzyste");

const x = -50;
let text = "";

if (x >= 100) {
  text = "(X > 100).";
} else if (x < 100 && x > 30) {
  text = "X jest średniakiem";
} else {
  text = "X jest mały";
}

console.log(text.toUpperCase());
