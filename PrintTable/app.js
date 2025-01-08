let num = prompt("Enter Number")

function printTable(num){
    let a = 1;
    while(a<=10){
        console.log(num+" * "+a+" = "+num*a);
        a++;
    }

}

printTable(num);