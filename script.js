// const add = (x, y) => {
//   const score = x + y;

//   //   if (score % 2 === 0) {
//   //     function1();
//   //   } else {
//   //     function2();
//   //   }
//   score % 2 === 0 ? function1(score) : function2(score);
// };

// const function1 = (num) => {
//   console.log(`Liczba ${num} jest parzysta`);
// };

// const function2 = (num) => {
//   console.log(`Liczba ${num} jest nieparzysta`);
// };

// add(3, 8);

// ex2
// let celcius;
// let temp;

// const fahrenheit = (c) => {
//   let celcius = c;
//   let temp = celcius * 1.8 + 32;
//   console.log(`${c} C = ${temp} F`);
// };
// fahrenheit(20);

// ex3 FAJNE!
const num = 10;
const numbers = [];

for (let i = 0; i < num; i++) {
  numbers.push(i);
}

const checker = (number) => {
  if (number % 3 === 0 && number !== 0) {
    console.log(`${number} jest podzielne przez 3`);
  } else {
    console.log(`${number} nie jest podzielne przez 3 lub ${number}=0`);
  }
};

numbers.forEach(checker);
