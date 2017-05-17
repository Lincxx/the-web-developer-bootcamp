var age = prompt("What is your current age");
var days = 365;

var daysBeenAlive = age * days;
console.log(daysBeenAlive);
var alive = document.querySelector('#alive');
alive.innerHTML = "You have been alive for " + daysBeenAlive + " days";
