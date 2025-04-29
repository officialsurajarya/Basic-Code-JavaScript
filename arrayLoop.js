let arr = ["Suraj", "Arya", "Adarsh", "Shubham", "Amit", "Sonu"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (let ar of arr) {
  console.log(ar.toUpperCase());
}

let marks = [89, 98, 76, 82, 87];
let sum = 0;
for (let mark of marks) {
  sum += mark;
}

console.log("avg=" + sum / marks.length);

let items = [78, 411, 741, 85, 100];
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}

console.log(items);
