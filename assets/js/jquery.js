"use strict";



var largeNav = $(".largenav");

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 5) {
        largeNav.addClass('navfixed');
        largeNav.removeClass('relative');
        
      } else {
        largeNav.removeClass('navfixed');
        largeNav.addClass('relative');
      
      };
});

