// const cities = ["gdynia", "sopot", "gdansk", "tczew", "torun"];

// for (let i = 0; i < cities.length; i++) {
//   console.log(`To miasto nazywa się ${cities[i].toUpperCase()}`);
// }

// let x = 0;
// while (x < 10) {
//   x = x + 2;
//   console.log(x);
// }

// let x = 20;
// do {
//   // x = x - 3;
//   x -= 3;
// } while (x > 0);
// console.log(x);

// Zadanie 4
// let numbers = [5, 8, 10, 23, 48, 60];
// for (let number of numbers) {
//   console.log(number / 5);
// }

// dodatkowe

// let numbers = [5, 8, 10, 23, 48, 60];
// for (let number of numbers) {
//   if (number % 2 === 0) {
//     console.log(
//       `%cliczba ${number} jest parzysta`,
//       "background-color:green; color:red"
//     );
//   } else {
//     console.log(`liczba ${number} jest nieparzysta`);
//   }
// // }

// numbers.unshift(1, 3, 4);
// numbers.push(60);
// numbers.pop();
// numbers.shift();
// console.log(numbers);

// fu;
// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ["red", "green", "blue", true, 123];
// const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

// const numbers2 = numbers.slice(0, 2);

// console.log(numbers2);

// const numbers3 = numbers.slice(2, 4);

// console.log(numbers3);

// colors.splice(-2);
// console.log(colors);

// const numbers = [1, 2, 3, 4];
// const animals = ["pizza", "burger", "sushi"];

// const combinedArray = numbers.concat(animals);
// console.log(combinedArray);

// const combinedArray2 = [...numbers, ...animals];
// console.log(combinedArray2);

const numbers = [1, 5, 13, 26, 48];

const newNumbers = numbers.map((x) => x * 5);
console.log(newNumbers);

for (const number of newNumbers) {
  if (number % 2 === 0) {
    console.log(`liczba parzyste ${number} `);
  } else {
    console.log(`liczba nieparzyste ${number} `);
  }
}
