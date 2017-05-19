   var pleaseStop = true
   while(pleaseStop){
       var userInput = prompt("Are we there yet").toLowerCase();
       var searchYesAnswer =  userInput.indexOf("yes");
       var searchYeahAnswer =  userInput.indexOf("yeah");

       if (searchYesAnswer !== -1 || searchYeahAnswer !== -1) {
           pleaseStop = false;
           alert("Yay, we finally made it!");
       }
   }

//or

var userInput = prompt("Are we there yet").toLowerCase();
while (userInput.indexOf("yes") === -1) {
    var userInput = prompt("Are we there yet").toLowerCase();
}

alert("Yay, we finally made it!");
