var person = {
    name: "Cindy",
    age: 32,
    city: "Missoula"
}

console.log(person.name);
console.log(person["name"])

// can't use dot notation is he porperty start with a number.
// you cannot use dot notation for property names with spaces.

//update the date

person.age = 34;


//A few ways of making arrays
var person2 ={};
person2.name = "Terry",
person2.gender = "M"

//another way of initializing an object
var person3 = new Object();
person3.name = "Jim",
person3.age = 42;
