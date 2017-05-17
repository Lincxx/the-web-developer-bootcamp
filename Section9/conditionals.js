/*
if
else if
else
*/
var age  = 25;
if (age < 0){
    console.log("ERROR, you are not a negative age");
}

if (age == 21){
    console.log("Happy Birthday");
}

if(age % 2 !== 0){
    console.log("What an odd boy you are");
}

if(age % Math.sqrt(age) == 0){
    console.log("You square");
}

if (age < 18){
    console.log("You can not enter");
} else if (age < 21){
    console.log("You can enter, but not drink");
} else {
    console.log("You can drink");
}
