//Function declaration
function square(x){
    return x * x;
}

var result = square(3);


function capitalize(str) {
    if(typeof str === number){
        return "that's not a string!"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = 'paris';
var capital = capitalize(city)
console.log(capital);


//funciton expression
var capitalize = function(str) {
    if(typeof str === number){
        return "that's not a string!"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
