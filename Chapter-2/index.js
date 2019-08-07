// let hashtags = '#';
// const counter = 1;

// while (hashtags.length <= 8) {
//   console.log(hashtags);
//   hashtags += '#';
//

// Fizz buzz excercise

// let number = 1;

// while (number <= 100) {
//   if (number % 3 === 0) {
//     console.log('Fizz');
//   }
//   if (number % 5 === 0 && number % 3 !== 0) {
//     console.log('Bizz');
//   }
//   if (number % 5 === 0 && number % 3 === 0) {
//     console.log('BizzFizz');
//   } else console.log(number);
//   number += 1;
// }

// Checker board

const size = 8;

let board = '';

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);
