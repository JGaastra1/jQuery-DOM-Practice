console.log("Let’s get ready to party with jQuery!");
$('img').addClass('image-center');
$("article").children().last().remove();
$('h1').css('font-size', Math.random()*100);
$('ol').append('<li>work with num</li>');
let newAside = $('aside').empty();
newAside.append('<p> this is the future </p>');
$('.col-sm-4').on(function(){
    let red = $('.col-sm-4').eq(0).val();
    let blue =$('.col-sm-4').eq(1).val();
    let green = $('.col-sm-4').eq(2).val();
    $('body').css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
});
$('img').click(function(){$(this).remove();})



// PART TWO
$('.movieRating').after("<ul></ul>");
$("ul").addClass("posts")
$('.button').click(function(){
    let rateInput = $('#rating').val();
    let titleInput = $('.title').val();
    $('.posts').append('<li></li>');
    $('li').addClass('nondeleted');
    $('li').append('Rate: ' + rateInput + '     ' + 'Movie: ' + titleInput);
    $('#rating').val(0);
    $('.title').val('');
    
    $('li').contents().filter(function(){
        return $(this).is('nondeleted');
    }).remove();
});

$('.clear').click(function(){
    $('ul').empty();
})
