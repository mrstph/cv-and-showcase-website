// SET UP THE DOCUMENT
$(document).ready(function(){

// ~~~~~~~~ MENU ~~~~~~~~

// toggle menu, search for .toggle and nav in the html file
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('nav');

// add opened class to nav when the toggle is clicked
$('.toggle').click(function(){
  $('nav').toggleClass('opened');
});

// Close menu when any link in the menu is clicked
$('#menu li a').click(function(){
  $('.toggle:visible').click();
});

// ~~~~~~~~ SLICK SLIDER FOR SKILLS ~~~~~~~~

//stock variable for browser's window, slick settings and slider
$window = $(window);
$slider = $('ul#slider');
settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  dots: true,
};

//display in mobile or tablet
if ($(window).width() < 991) {
  $slider.slick(settings);
} 

//resize behavior to get the good positioning 
$window.on('resize', function() {
  if ($window.width() >= 992) {
    if ($slider.hasClass('slick-initialized'))
      $slider.slick('unslick');
    return
  }
  if (! $slider.hasClass('slick-initialized'))
    return $slider.slick(settings);
});  

});