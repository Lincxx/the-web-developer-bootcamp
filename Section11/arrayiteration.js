var colors = ['red', 'yellow', 'pink'];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//the arg we pass in is
colors.forEach(function(color){
    console.log(color);
})


//seperate funciton and forEach
var names = ['Jeremy', 'Fred', 'Susan', 'Josh'];

function writeLine(name){
    console.log(name);
}

names.forEach(writeLine);
