var someObj = {};

//Which of the following are valid

//someObj._name = "Hedwig"; - yes
//someObj.age = 6; - yes

//var prop = "color";
//someObj[prop] = "red"; - yes

//someObj.123 = true;


//---------------------------------------------
var someObj2 = {
    friends:[
        {name: "Malfoy"},
        {name: "Crabble"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

//Write code to retrieve "Malfoy" from someObj2
console.log(someObj2.friends[0].name);
