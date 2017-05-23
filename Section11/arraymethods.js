//6 array methods
//push, pop, shift, unshift, indexOf, slice

var colors = ["red", "blue"];

//push - adds to the end of the array
colors.push("yellow");
colors.push("pink");

//pop - removes to the end of the array
colors.pop();

//unshift - adds one or more to the beginning of an array
colors.unshift("orange");

//shift - removes the first element from an array
colors.shift();

//indexOf - used to find the index of an item in an array
var friends = ["Jim", "Bob"]
console.log(friends.indexOf("Jim"));

//we can also use indexOf to let use know if an element exists or not
//This will return -1, if not present
console.log(friends.indexOf("Tim"));


//slice - is used to copy certian portion of an array - the org array stays the same

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

//the first number is the starting index, the last number is non inclusive
var citrus = fruits.slice(1,3);
console.log(citrus);
