(function($){ "use strict";
             


/*=========================================================================
    Projects Carousel
=========================================================================*/
    $('#projects-carousel').owlCarousel({
        loop: false,
        margin: 0,
        autoplay: false,
        smartSpeed: 500,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>",
	    "<i class='fa fa-chevron-right'></i>"],
        dots: false,
        responsive : {
            0 : {
                items: 1
            },
            580 : {
                items: 1,
            },
            768 : {
                items: 1,
            },
            992 : {
                items:2,
            }
        }
    });


})(jQuery);


// window.onscroll = function() {myFunction()};

// var navbar = document.getElementsByClassName("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }