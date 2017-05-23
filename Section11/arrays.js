//friend array

var friends = ["Charlie", "Jim", "Fred", "Liz"];
console.log(friends[1]);


//update an indices
friends[1] = "Jeremy";
console.log(friends[1]);

//Add new data
friends[4] = "Rhonda";
console.log(friends);

//add new data to index 10
friends[10] = "Theresa";
console.log(friends); //here JS will make a bunch of empty spaces and set it to undefined

//An other way to add to an array is with push.
friends.push("Tony");
console.log(friends);
