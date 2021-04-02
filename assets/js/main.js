/***************************************************

==================== JS INDEX ======================

****************************************************

01. PreLoader Js

02. Info Bar Js

03. Data-Background Js

04. Sticky Header Js

05. Mobile Menu Js

06. Scroll To Top Js

07. Hero Slider Js

08. Case Slider Js

09. Client Slider Js

10. Testimonial Slider Js

11. Testimonial Slider 2 Js

12. Testimonial Slider 3 Js

13. Award Slider Js

14. Team Achivement Slider Js

15. Project Slider Js

16. Post Box Slider Js

17. Masonary Js

18. Nice Select Js

19. WoW Js

20. Counter Js

****************************************************/


(function ($) {
    "use strict";

    ////////////////////////////////////////////////////

    // 01. PreLoader Js

    $(window).on('load', function () {

        $("#loading").fadeOut(500);

    });


    ////////////////////////////////////////////////////

    // 03. Sticky Header Js

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        if (scroll < 100) {

            $("#header-sticky").removeClass("sticky");

        } else {

            $("#header-sticky").addClass("sticky");

        }

    });


    ////////////////////////////////////////////////////

    // 04. Data-Background Js

    $("[data-background").each(function () {

        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");

    });



    ////////////////////////////////////////////////////

    // 07. Hero Slider Js

    $('.slider-active').owlCarousel({

        loop: true,

        items: 1,

        navText: ['PREV', 'NEXT'],

        nav: true,

        dots: false,

        responsive: {
            0: {
                items: 1
            },

            767: {
                items: 1
            },

            992: {
                items: 1
            }
        }
    });


    ////////////////////////////////////////////////////

    // 08.  Product slider Js

    $('.product-active').owlCarousel({

        loop: true,

        items: 4,

        margin: 30,


        dots: false,

        responsive: {
            0: {
                items: 1
            },

            767: {
                items: 2
            },

            992: {
                items: 4
            },
            1200: {
                items: 4
            },
        }
    });


    ////////////////////////////////////////////////////

    // 08.  Product 2 slider Js

    $('.product-active-2').owlCarousel({

        loop: true,

        items: 1,

        navText: ['PREV', 'NEXT'],

        nav: true,

        margin: 30,

        dots: false,

        responsive: {
            0: {
                items: 1
            },

            767: {
                items: 2
            },

            992: {
                items: 4
            }
        }
    });



    ////////////////////////////////////////////////////

    // 09. Brand Active Js


    $('.brand-active').owlCarousel({

        loop: true,

        margin: 30,

        autoplay: false,

        autoplayTimeout: 3000,

        smartSpeed: 500,

        items: 6,

        navText: ['<button><i class="fa fa-angle-left"></i>PREV</button>', '<button>NEXT<i class="fa fa-angle-right"></i></button>'],

        nav: false,

        dots: false,

        responsive: {
            0: {
                items: 1,
            },

            480: {

                items: 2

            },

            767: {

                items: 3

            },

            992: {

                items: 4

            },

            1200: {

                items: 5

            },

            1600: {

                items: 6

            }

        }

    });


    ////////////////////////////////////////////////////

    // 08.  Blog slider Js

    $('.blog-active').owlCarousel({

        loop: true,

        items: 1,

        navText: ['PREV', 'NEXT'],

        nav: true,

        margin: 30,

        dots: false,

        responsive: {
            0: {
                items: 1,
                  nav: false
            },

            767: {
                items: 2,
                nav: false
              
            },

            992: {
                items: 3
            },
            1600:{
                items:4
            }
        }
    });


    ////////////////////////////////////////////////////

    // 08.  Blog slider Js

    $('.product-slide').owlCarousel({


        items: 1,

        navText: ['PREV', 'NEXT'],

        nav: true,

        margin: 30,

        dots: false,

        responsive: {
            0: {
                items: 1
            },

            767: {
                items: 1
            },

            992: {
                items: 1
            }
        }
    });

    
    
    ////////////////////////////////////////////////////

    // 09.  Blog slider Js

    $('.related-product-slider').owlCarousel({ 

        items: 1,

        navText: ['PREV', 'NEXT'],

        nav: false,

        margin: 30,

        dots: false,

        responsive: {
            0: {
                items: 1
            },

            767: {
                items: 2
            },

            992: {
                items: 4
            }
        }
    });
    
    
	////////////////////////////////////////////////////

    // 05. Mobile Menu Js    
    
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });
    
    
    

    ////////////////////////////////////////////////////

    // 06. Scroll To Top Js

    function smoothSctollTop() {

        $('.smooth-scroll a').on('click', function (event) {

            var target = $(this.getAttribute('href'));

            if (target.length) {

                event.preventDefault();

                $('html, body').stop().animate({

                    scrollTop: target.offset().top - 0

                }, 1500);

            }

        });

    }

    smoothSctollTop();



    // Show or hide the sticky footer button

    $(window).on('scroll', function (event) {

        if ($(this).scrollTop() > 600) {

            $('#scroll').fadeIn(200)

        } else {

            $('#scroll').fadeOut(200)

        }

    });



    //Animate the scroll to yop

    $('#scroll').on('click', function (event) {

        event.preventDefault();



        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });

    
    


    ////////////////////////////////////////////////////

    // 19. WoW Js

    new WOW().init();

    ////////////////////////////////////////////////////

    // 18. Nice Select Js

    $('select').niceSelect();

    
    
     ////////////////////////////////////////////////////

    // 19. slider range Js

    
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );

    
    
    
    
    /*----- cart-plus-minus-button -----*/

$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');

$(".qtybutton").on("click", function () {

	var $button = $(this);

	var oldValue = $button.parent().find("input").val();

	if ($button.text() == "+") {
		
		var newVal = parseFloat(oldValue) + 1;
		
	} else {

		// Don't allow decrementing below zero

		if (oldValue > 0) {

			var newVal = parseFloat(oldValue) - 1;

		} else {

			newVal = 0;

		}

	}

	$button.parent().find("input").val(newVal);

});

    
    


})(jQuery);





const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");
const removebtn = document.querySelector(".remove-btn");
searchBtn.addEventListener("click", function () {
    searchForm.classList.add("active");
});

removebtn.addEventListener("click", function () {

    searchForm.classList.remove("active");
});


/*
const Btn=document.querySelectorALl(".tab-btn");
const about=document.querySelector(".archive-border");
const articles= document.querySelectorAll(".content");

*/
