/**
 * Created by tcarmel on 23/08/18.
 */

// Theme slider
function swiperFunc(i) {
    var mySwiper = new Swiper('.slider-team', {
        effect: 'fade',
        loop: true,
        speed: 1500,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.next-button',
            prevEl: '.prev-button',

        },
    });
    mySwiper.slideToLoop(i, 1, true);
};

(function($){
    /*== Sliders ==*/
    // Home page slider
    var homeSwiper = new Swiper('.home-slider', {
        loop: true,
        speed: 1500,
        slidesPerView: 'auto',
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    //swiper slider product
    $(document).ready(function () {
        var productSwiper = new Swiper('.product-slider', {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 5,
            slidesPerColumnFill: 'row',

            navigation: {
                nextEl: '.next-button',
                prevEl: '.prev-button',

            },

            breakpoints: {
                600: {
                    direction: 'horizontal',
                    slidesPerView: 'auto',
                    slidesOffsetBefore: 400,
                    loop: true,
                }
            },
        })
    });




}(jQuery))