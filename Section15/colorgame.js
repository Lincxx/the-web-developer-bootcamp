var numberOfSqaure = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var resetBtn = document.querySelector('#reset');
var h1 = document.querySelector('h1');
// var easyBtn = document.querySelector("#easyBtn")
// var hardBtn = document.querySelector("#hardBtn")
var modeButtons = document.querySelectorAll('.mode')

init();

function init(){
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to square
        squares[i].addEventListener('click', function() {
            //grab color of clikced square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again?";
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSqaure = 3 : numberOfSqaure = 6;

            reset();
            //figute out how many squares to show
            //pick new colors
            //update page to reflect changes
        });
    }
}


function reset(){
    //generate all new colors
    colors = generateRandomColor(numberOfSqaure);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color displat ro match picked colored
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    message.textContent = "";
    //change colors of sqaures
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    //set the h1 bg to the starting color
    h1.style.backgroundColor = "steelblue";
}


// easyBtn.addEventListener('click', function() {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numberOfSqaure = 3
//     colors = generateRandomColor(numberOfSqaure);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//
//     }
// });
//
// hardBtn.addEventListener('click', function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numberOfSqaure = 6
//     colors = generateRandomColor(numberOfSqaure);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });



resetBtn.addEventListener('click', function() {
    reset();
});

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
