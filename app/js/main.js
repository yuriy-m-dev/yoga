$(function() {
   $('.travel__slider').owlCarousel({
       loop: true,
       items: 3,
       autoWidth: true,
       margin: 30,
       center: true,
       dots: false,
       autoplay: true,
       autoplayTimeout: 4000
   });

   $('.program__slider').owlCarousel({
    loop: true,
    items: 3,
    autoWidth: true,
    margin: 30,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000
    });

    $('.reviews__slider').owlCarousel({
        items: 1,
        nav: true,
        navContainer: '.reviews__slider',
        loop: true
    });
});