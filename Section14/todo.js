var lis = document.querySelectorAll('li');

// li.addEventListener('mouseover', function(){
//     li.style.color = 'green';
// });
//
// li.addEventListener('mouseout', function() {
//     li.style.color= 'black';
// })



for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', function(){
        this.style.color = 'green';
    });
    lis[i].addEventListener('mouseout', function(){
        this.style.color = 'black';
    });
}
