var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var resetButton = document.getElementById('rest');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var input = document.querySelector('input');
var winningScoreDisplay = document.querySelector('p span');


var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5

p1Button.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }

});

p2Button.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener('click', function(){
    reset();
});

input.addEventListener('change', function(){
    //this comes in as a string.
    winningScoreDisplay.textContent = this.value;
    //so here we will conver tinot a number
    winningScore = Number(this.value);
    //this is called to reset the game
    reset();
});


function reset(){
    gameOver = false;

    p1Display.textContent = 0;
    p1Score = 0;
    p1Display.classList.remove("winner");

    p2Display.textContent = 0;
    p2Score = 0;
    p2Display.classList.remove("winner");
}
