//jquery text manupulation

$(document).ready(function(){
    // set text
   $('.para p').text("this is set text");
   //append text 
   $('.para p').append(" this is append text");
   $('.para p').html(" <h2>this is append text</h2>");
   $('p').prepend("this is prepend text");
   // create new element
   let newPara=$('<p></p>').text('this is new custom para tag');
//    $('#p1').after(newPara);

$('#p1').before(newPara);

//get attribute 
$('a').attr('href');
$('a').removeAttr('href');
//set attribute
$('a').attr('href','https://www.instagram.com/?hl=en');

//   add css style 
// $('.para p').css('color','blue');

//add multiple css by json formate
// $('.para p').css({
//     'color':'orange',
//     'fontSize':'30px',
//     'backgroundColor':'gray'
// });

//styling css by addclass
// $("h1,  p").addClass("mystyle");

//multiple class add
$("h1").addClass("mystyle  mystyle2");




});