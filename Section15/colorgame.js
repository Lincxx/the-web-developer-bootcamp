var colors = generateRandomColor(6);

var squares = document.querySelectorAll('.square');
//set a random color
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');

//set the color value, we wnat the user to see
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to square
    squares[i].addEventListener('click', function() {
        //grab color of clikced square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            h1.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < colors.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }

}

function pickColor() {
    //get a random number based on the length of the colors array
    var random = Math.floor(Math.random() * colors.length);
    //return the random color
    return colors[random];
}

function generateRandomColor(number){
    //make an array
    var arr = [];
    //repeat number times
    for (var i = 0; i < number; i++) {
        //get ranodm ccolor and push to array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random()* 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random()* 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random()* 256);

    return "rgb("+ r + ", " + g + ", " + b + ")";
}
