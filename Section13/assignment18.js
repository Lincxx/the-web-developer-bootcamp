var first = document.getElementById('first').innerHTML
console.log("first way: " + first);


var second = document.querySelector('#first').innerHTML;
console.log("second way: " + second);


var third = document.querySelectorAll('p')[0];
console.log("third way: " + third.innerHTML);


var fourth = document.querySelector('p').innerHTML;
console.log("fourth way: " + fourth);

var fifth = document.getElementsByTagName('p')[0].innerHTML;
console.log("fifth way: " + fifth);

var sixth = document.getElementsByClassName('special')[0].innerHTML;
console.log("sixth way: " + sixth);

//adjacent
var seventh = document.querySelector('h1 + p').innerHTML;
console.log("seventh way: " + seventh);

//--------------------------------------
