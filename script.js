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

let celcius;
let temp;

const fahrenheit = (c) => {
  let celcius = c;
  let temp = celcius * 1.8 + 32;
  console.log(`${c} C = ${temp} F`);
};
fahrenheit(20);
