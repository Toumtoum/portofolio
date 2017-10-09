$( document ).ready(function(){
$('.modal').modal({
     dismissible: true, // Modal can be dismissed by clicking outside of the modal
     opacity: .5, // Opacity of modal background
     inDuration: 300, // Transition in duration
     outDuration: 200, // Transition out duration
     startingTop: '4%', // Starting top style attribute
     endingTop: '10%', // Ending top style attribute
   }
 );

});

$( document ).ready(function(){
$('a[href^="#"]').on('click',function(e){
e.preventDefault();

var target = this.hash;
var $target = $(target);
//scroll
 $('html, body').animate({
  'scrollTop': $target.offset().top
 },1000, 'swing',function () {
  window.location.hash=target;
 });


});
});

// document.addEventListener('scroll', function(e) {
//   var aTag = $('a[href^="#"]');
//   $('html,body').animate({scrollTop: aTag.offset().top},'slow');
//  }
//
// );

$( document ).ready(function(){
$('a[href^="#"]').addEventListener('scroll', function(e){
e.preventDefault();

var target = this.hash;
var $target = $(target);
//scroll
 $('html, body').animate({
  'scrollTop': $target.offset().top
 },1000, 'swing',function () {
  window.location.hash=target;
 });
});

});
