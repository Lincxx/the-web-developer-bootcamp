console.log("Print all numbers between -10 and 19");

var negNum = -10;
while (negNum < 20) {
    console.log(negNum);
    negNum++
}

console.log("Print all even numbers between 10 and 40");

var even = 10;
while (even <= 40) {
    if(even % 2 == 0){
        console.log(even);
    }

    even++;
}

console.log("Print all odd numbers between 300 and 333");

var odd = 300;
while (odd <= 333) {
    if(odd % 2 == 1){
        console.log(odd);
    }
    odd++;
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50")

var five = 5;
while (five <= 50) {
    if(five % 5 == 0 && five % 3 == 0){
        console.log(five);
    }
    five++;
}
