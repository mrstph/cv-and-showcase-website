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

// ~~~~~~~~ SLICK SLIDER FOR CLASSES ~~~~~~~~

$('ul.class-slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// Click on class icon calls the right text and the right picture
// go to corresponding slide
// remove text visibility and add visibility to the good text
// remove class icon brightness(100) and add it to 2 other icons
// make background img visible on non active classes icons

//MATELOT CLASS
$('img#class-matelot').click(function() {
   $('ul.class-slider').slick('slickGoTo', 0);
   $('div.class-description').removeClass('visible');
   $('#class-text-matelot').addClass('visible');

    $('ul#classes-icon-list img').removeClass('visible');
    $(this).addClass('visible');

    $('#bck-img-matelot').removeClass('visible');
    $('#bck-img-neuro-chirurgien').addClass('visible');
    $('#bck-img-chef').addClass('visible');
 });

//NEURO-CHIRURGIEN CLASS
$('img#class-neuro-chirurgien').click(function() {
   $('ul.class-slider').slick('slickGoTo', 1);
   $('div.class-description').removeClass('visible');
   $('#class-text-neuro-chirurgien').addClass('visible');

   $('ul#classes-icon-list img').removeClass('visible');
    $(this).addClass('visible');

    $('.bck-img').removeClass('visible');
    $('.bck-img').addClass('visible');

    $('#bck-img-neuro-chirurgien').removeClass('visible');
    $('#bck-img-matelot').addClass('visible');
    $('#bck-img-neuro-chef').addClass('visible');
 });

//CHEF CLASS 
$('img#class-chef').click(function() {
   $('ul.class-slider').slick('slickGoTo', 2);
   $('div.class-description').removeClass('visible');
   $('#class-text-chef').addClass('visible');

   $('ul#classes-icon-list img').removeClass('visible');
    $(this).addClass('visible');

    $('#bck-img-chef').removeClass('visible');
    $('#bck-img-matelot').addClass('visible');
    $('#bck-img-neuro-chirurgien').addClass('visible');
  });


// after change (swipe or click), stock the current slide value in CurrentSlideId
// switch between different cases (0 = matelot, 2 = chirurgien, 3 = chef) and add/remove visible class on different elements

$('ul.class-slider').on('afterChange', function() {
  var CurrentSlideId = $('.slick-current').attr("data-slick-index");
  switch (CurrentSlideId) {
    //MATELOT CLASS
    case '0':
      $('div.class-description').removeClass('visible');
      $('#class-text-matelot').addClass('visible');
    
      $('ul#classes-icon-list img').removeClass('visible');
      $('img#class-matelot').addClass('visible');
    
      $('#bck-img-matelot').removeClass('visible');
      $('#bck-img-neuro-chirurgien').addClass('visible');
      $('#bck-img-chef').addClass('visible');
      break;
    
    //NEURO-CHIRURGIEN CLASS
    case '1':
      $('div.class-description').removeClass('visible');
      $('#class-text-neuro-chirurgien').addClass('visible');
    
      $('ul#classes-icon-list img').removeClass('visible');
      $('img#class-neuro-chirurgien').addClass('visible');
    
      $('#bck-img-neuro-chirurgien').removeClass('visible');
      $('#bck-img-matelot').addClass('visible');
      $('#bck-img-chef').addClass('visible');
      break;

    //CHEF CLASS
    case '2':
      $('div.class-description').removeClass('visible');
      $('#class-text-chef').addClass('visible');
    
      $('ul#classes-icon-list img').removeClass('visible');
      $('img#class-chef').addClass('visible');
    
      $('#bck-img-chef').removeClass('visible');
      $('#bck-img-matelot').addClass('visible');
      $('#bck-img-neuro-chirurgien').addClass('visible');
      break;
  
  }
});

// ~~~~~~~~ SLICK SLIDER FOR PREORDER ~~~~~~~~

$('.preorder-slider').slick({
  dots: true,
  arrows: false,
  infinite: false,
  slidesToShow: 3.5,
  slidesToScroll: 3,
  swipe: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

});