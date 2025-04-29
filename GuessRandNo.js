let max = prompt("Enter max Number");
let random = Math.floor(Math.random()*max)+1;
let guess = prompt("Guess The Number Between 1 - "+max);


while(true){
    if (guess == "quit"){
        console.log("User Quit");
        break;
    }

    if (guess == random){
        console.log("Congrats! You Win! Your Number is: "+guess)
        break;
    }
    else {
        guess = prompt("Your Guess is incorrect, Plz Try Again. Enter the Number Between 1 - "+max);
    }
}