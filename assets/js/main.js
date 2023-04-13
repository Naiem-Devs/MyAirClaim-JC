(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  $('select').niceSelect();

  // owlCarousel
  $(".feedback_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    smartSpeed: 1000
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });

 
})(jQuery);
