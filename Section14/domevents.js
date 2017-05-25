var h1 = document.querySelector('h1');

h1.addEventListener('click', function(){
    h1.style.color = "pink";
});

var button = document.querySelector('button');
var p = document.querySelector('#clickIt');

button.addEventListener('click', function(){
    p.textContent = "Someone clicked the button";
});


// var ul = document.querySelector('ul');
// ul.addEventListener('click', function(){
//     console.log("UL CLICKED");
// });


var lis = document.querySelectorAll('li');
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function(){
        //this refers to the li I clicked on
        this.style.color = "pink";
    });
}
