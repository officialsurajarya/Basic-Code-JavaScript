let solution = "sub";
let a = 4;
let b = 5;

switch (solution) {
  case "add":
    console.log(a + b);
    break;
  case "sub":
    console.log(a - b);
    break;
  case "mul":
    console.log(a * b);
    break;
  case "div":
    console.log(a / b);
    break;
  default:
    console.log("Invalid Choise");
    break;
}
