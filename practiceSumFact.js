let n = prompt("Enter a number");

let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);

// sum
let sum = arr.reduce((pre, cur) => {
  return pre + cur;
});
console.log("sum " + sum);

//Factorial
let fact = arr.reduce((pre, cur) => {
  return pre * cur;
});
console.log("Factorial " + fact);
