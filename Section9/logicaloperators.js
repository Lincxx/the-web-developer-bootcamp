/*
logicaloperators.js

&&  5 < 10 && 5 != 5  false
||  9 > 9 || 5 === 5 true
!   !(5 === 9) true

*/

var x = 10;
var y = "a";

console.log(y === "b" || x >= 10);


var xx = 3;
var yy = 8;

console.log(!(xx == "3" || xx===yy) && !(yy != 8 && xx <= yy));

/*
Truthy and Falsy Values
Falsy rule
"", 0, NaN, -1, null, undefined

*/

var str = "";
var msg = "haha!";
var isFunny = "false";
console.log(((str || msg) && isFunny))
console.log(!((str || msg) && isFunny));
