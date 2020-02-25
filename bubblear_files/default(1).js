$(document).ready(function () {

    var isIE = /*@cc_on!@*/false || !!document.documentMode, // Internet Explorer 6-11
        isEdge = !isIE && !!window.StyleMedia; // Edge 20+

    // Check if Internet Explorer 6-11 OR Edge 20+
    if (isIE || isEdge) {
        $("body").addClass("ie");
    }

    // Main menu
    $(".humburger").click(function () {
        $(this).toggleClass("open-hum");
        $(".menu-popup").toggleClass("open-popup");
        $("header").toggleClass("open-header");
    });

    if ($(window).width() > 768) {
        $(".main-nav ul li").hover(function () {
            $(this).find("ul.sub-menu").slideToggle();
        });
    } else {
        $(".main-nav ul li").click(function () {
            $(this).find("ul.sub-menu").slideToggle();
        });
    }

    // Accordeon (f&q)
    function closeAccor(closebody) {
        $(closebody).slideUp("slow");
        $(closebody).parent().removeClass("open-accor");
    }

    $(".accor-head").click(function (e) {
        var clicked = $(e.currentTarget);
        var openbody = $(clicked).parent().find('.accor-body');
        if ($(openbody).css("display") != 'block') {
            closeAccor($(".accor-body"));
        }
        $(openbody).slideDown("slow");
        $(clicked).parent().addClass("open-accor");
    });

    $(".close-icon").click(function (e) {
        var clicked = $(e.currentTarget);
        var closebody = clicked.parent().find('.accor-body');
        closeAccor(closebody);
    });

    // Team popup
    $(".team-item").click(function (e) {
        $(".team-popup").addClass("open-popup");
        var arr = $(".team-item").toArray();
        var i;
        for (i = 0; i < arr.length; i++) {
            if ($(arr[i]).attr("class") == $(this).attr("class")) {
                break;
            }
        }
        swiperFunc(i);
    });


    // PopUp
    $(".close-popup").click(function (e) {
        var popup = $(e.currentTarget).parent().parent();
        $(popup).removeClass("open-popup");
    });

    $(".contact-popup .close-popup").click(function (e) {
        var popup = $(e.currentTarget).parent().parent().parent();
        $(popup).removeClass("open-popup");
    });

    $(".open-contact").click(function (e) {
        $(".contact-popup").addClass("open-popup");
    });

    /*== Sliders ==*/
    // Home page slider

    $('.slider-con').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow: false,
        autoplay: true
      });

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

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


    $(".information-product button").click(function (e) {
        $(".information-product button").addClass("not-click");
        var clicked = $(e.currentTarget);
        $(clicked).toggleClass("not-click");
        $(".desc-product, .spect-product").hide();
        if ($(clicked).attr("class") == "desc-btn st-btn") {
            $(".desc-product").fadeIn("slow");
        }
        if ($(clicked).attr("class") == "spect-btn st-btn") {
            $(".spect-product").fadeIn("slow");
        }
    });

    $(".read-more").click(function () {
        $(this).toggleClass("read-more-open");
        $(".read-more + .more-info").slideToggle(1000);
        $(".read-more-open span:nth-child(2)").text("close");
        if ($(this).attr('class').search("read-more-open") < 0) {
            $(".read-more span:nth-child(2)").text("Read More");
        }
    });
});

$(window).scroll(function () {

    // Main title fade effect
    var $topImage = $('.top-image-con'),
        limit = $topImage.height(),
        scrollTop = $(window).scrollTop(),
        opacity = 1 - (scrollTop / limit),
        scale = 1 + ((scrollTop / limit) / 3);

        if (scrollTop > limit) {
            return;
        }

    $topImage.css({
        'opacity': opacity,
    });

    $topImage.find('.center .main-title h1').css({
        'opacity': opacity,
        'transform': 'scale(' + scale + ')'
    });

    var $topImage = $('.side-title'),
        limit = $topImage.height(),
        scrollTop = $(window).scrollTop(),
        scale = 1 + (scrollTop / limit * 350);
    scaleb = 1 + (scrollTop / limit * 400);
    scalec = 1 + (scrollTop / limit * 450);
    scaled = 1 + (scrollTop / limit * 500);

    $topImage.find('span.para1').css({
        'top': 'calc(-40vh + ' + scale + 'px)'
    });

    $topImage.find('span.para2').css({
        'top': 'calc(-60vh + ' + scaleb + 'px)'
    });

    $topImage.find('span.para3').css({
        'top': 'calc(-90vh + ' + scalec + 'px)'
    });

    $topImage.find('span.para4').css({
        'top': 'calc(-250vh + ' + scaled + 'px)'
    });

    // Section fade in animation
    $(window).scroll(function () {
        inViewport();
    });

    $(window).resize(function () {
        inViewport();
    });

    function inViewport() {
        $('section').each(function () {
            var windowHeight = $(window).height(),
                divPos = $(this).offset().top,
                topOfWindow = $(window).scrollTop();

            if (divPos < topOfWindow + windowHeight - 150) {
                $(this).addClass('show-section');
            }
        });

        $('body.home-page .main-logo').each(function () {
            var windowHeight = $(window).height(),
                topOfWindow = $(window).scrollTop();

            if ( topOfWindow > windowHeight) {
                $(this).addClass('fade-out');
            } else {
                $(this).removeClass('fade-out');
            }
        });
    }

});






