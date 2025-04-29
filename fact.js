let num = 4;

// let fact = 1;
// for (let i = num; i >= 1; i--) {
//   fact *= i;
// }
// console.log(fact);

const fact = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};
console.log(fact(4));
