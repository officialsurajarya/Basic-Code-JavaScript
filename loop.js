let start = 1;
let end = 20;
let ans = "";

for (let i = start; i <= end; i++) {
  console.log(ans);
  ans += i + " ";
}
console.log(`Count of ${start} to ${end} is
    (${ans})`);
let num = 0;
let j = 5;
for (let i = 1; i <= j; i++) {
  num += i;
} 
console.log(`Sum of 0 to ${j}=${num}`);



for (let a=1; a<=5; a++){
  console.log(a);
}

console.log("Odd Numbers");

for (let b=1; b<=15; b=b+2){
  console.log(b);
}

console.log("Even Numbers");

for (let b=2; b<=10; b=b+2){
  console.log(b);
}

console.log("Reverse Even Numbers");

for (let b=10; b>=2; b=b-2){
  console.log(b);
}