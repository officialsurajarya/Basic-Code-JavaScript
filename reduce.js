let arr = [1, 2, 3, 4, 5];

const output = arr.reduce((pre, cur) => {
  return pre + cur;
});

console.log(output);

let arry = [1, 9, 36, 4, 83, 58, 67, 5, 64, 93, 3, 45, 65, 4, 3, 33, 32];

let out = arry.reduce((pre, cur) => {
  // return pre > cur ? pre : cur;
  if (pre > cur) {
    return pre;
  } else {
    return cur;
  }
});
console.log(out);
