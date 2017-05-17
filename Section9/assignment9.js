var answer = 4;
var guess = Number(prompt("Guess the secret number"));

if(guess === answer){
    alert("You got it right")
} if(guess < answer){
     alert("Your guess is too low");
 } else if(guess > answer){
     alert("Your guess is too high");
 } else {
     alert("Not sure what that is");
 }
