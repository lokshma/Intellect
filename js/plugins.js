  jQuery(document).ready(function($) {
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 800
    });
});

window.onload = function(){
  // Initiate animate on scroll library
  AOS.init({
    once:true,
    mirror:false
  });

  // our clients/partners
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center:true,
    autoplaySpeed:2000,
    responsive: {
      0: { items: 1 }, 768: { items: 2 }, 900: { items: 3 }
    }
  });

  // client testimonials
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,     
    loop: true,
    center:true,
    autoplayTimeout:7000,
    autoplaySpeed:2000,   
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });

  // our projects
  $('.projects-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplay: true,
    animateOut: 'slideOutUp',
    stagePadding: 0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

}


// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
