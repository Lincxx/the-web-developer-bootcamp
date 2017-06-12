//Check off specific todos by clicking
//the 2nd param li - it is or it could be there when the pages loads
$('ul').on("click", "li", function(){
    //if li is gray
    // if($(this).css('color') === 'rgb(128, 128, 128)') {
    //     $(this).css({
    //         'color': 'black',
    //         textDecoration: 'none'
    //     })
    // } else {
    //     $(this).css({
    //         'color': 'gray',
    //         textDecoration: 'line-through'
    //     });
    // }
    //this replaces the above code
    $(this).toggleClass("completed");

});

//delete a spicific todo, by clicking on the X
$('ul').on("click", "span", function(event){
    //this fades the li as well as the span
    $(this).parent().fadeOut(500, function(){
        //when fadeOut is completed then want to remove it
        $(this).remove();
    });
    //this stop the bubbling affect.
    //bubbling is where this is fired, them the li clicked event
    //is fire, all the way up to the html
    event.stopPropagation();

});



$('input[type="text"]').keypress(function(event){
    if(event.which === 13){
        //grabbing new todo from input
        var todoText = $(this).val()
        $(this).val(""); //this is how to use the setter of val()
        $('ul').append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>")
    }
});


$('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle();
})
