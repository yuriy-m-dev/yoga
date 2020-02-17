$(function() {
   $('.travel__slider').owlCarousel({
        loop: true,
        autoWidth: true,
        margin: 30,
        center: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
           0: {
            autoWidth: false,
            center: false,
            items: 1,
            autoplay: false,
            dots: true,
            margin: 10
           },
           1100: {
               
           }
       }
   });

   $('.program__slider').owlCarousel({
        loop: true,
        autoWidth: true,
        margin: 30,
        center: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
             autoWidth: false,
             center: false,
             items: 1,
             autoplay: false,
             dots: true,
             margin: 10
            },
            1100: {

            }
        }
    });

    $('.reviews__slider').owlCarousel({
        items: 1,
        nav: true,
        navContainer: '.reviews__slider',
        loop: true,
        responsive: {
            0: {
                nav: false
            },
            1000: {

            }
        }
    });
});