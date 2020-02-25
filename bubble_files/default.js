(function ($) {
  $(document).ready(function () {
    $("html").scrollTop(0);

    var isIE = /*@cc_on!@*/ false || !!document.documentMode, // Internet Explorer 6-11
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
        $(this)
          .find("ul.sub-menu")
          .slideToggle();
      });
    }
    // else {
    //   $(".main-nav ul li").click(function() {
    //     $(this)
    //       .find("ul.sub-menu")
    //       .slideToggle();
    //   });
    // }

    // Accordeon (f&q)
    function closeAccor(closebody) {
      $(closebody).slideUp("slow");
      $(closebody)
        .parent()
        .removeClass("open-accor");
    }

    $(".accor-head").click(function (e) {
      var clicked = $(e.currentTarget);
      var openbody = $(clicked)
        .parent()
        .find(".accor-body");
      if ($(openbody).css("display") != "block") {
        closeAccor($(".accor-body"));
      }
      $(openbody).slideDown("slow");
      $(clicked)
        .parent()
        .addClass("open-accor");
    });

    $(".close-icon").click(function (e) {
      var clicked = $(e.currentTarget);
      var closebody = clicked.parent().find(".accor-body");
      closeAccor(closebody);
    });

    // PopUp
    $(".close-popup").click(function (e) {
      var popup = $(e.currentTarget)
        .parent()
        .parent();
      $(popup).removeClass("open-popup");
    });

    $(".contact-popup .close-popup").click(function (e) {
      var popup = $(e.currentTarget)
        .parent()
        .parent()
        .parent();
      $(popup).removeClass("open-popup");
    });

    $(".open-contact").click(function (e) {
      $(".contact-popup").addClass("open-popup");
    });

    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top
              },
              1000,
              function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
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

    $(".table-btn").click(function (e) {
      //$(this).toggleClass("close-table-btn");
      if ($(this).hasClass("close-table-btn")) {
        $(".table-para").hide();
        $(this)
          .find("span:first-child")
          .hide();
        $(this)
          .find("span:nth-child(2)")
          .show();
        $(this).removeClass("close-table-btn");
      } else {
        $(".table-para").show();
        $(this)
          .find("span:first-child")
          .show();
        $(this)
          .find("span:nth-child(2)")
          .hide();
        $(this).addClass("close-table-btn");
      }
    });

    $(".read-more").click(function (e) {
      $(this).toggleClass("read-more-open");
      if ($(this).hasClass("read-more-open")) {
        $(this)
          .siblings(".more-info")
          .slideToggle(1000);

        $(this)
          .find("span:nth-child(2)")
          .hide();
        $(this)
          .find("span:nth-child(3)")
          .show();
      } else {
        $(this)
          .siblings(".more-info")
          .slideUp(500);
        $(this)
          .find("span:nth-child(2)")
          .show();
        $(this)
          .find("span:nth-child(3)")
          .hide();
      }
    });
  });

  $(window).scroll(function () {
    if ($(window).width() > 1024) {
      // Main title fade effect
      var $topImage = $(".top-image-con"),
        limit = $topImage.height(),
        scrollTop = $(window).scrollTop(),
        opacity = 1 - scrollTop / limit,
        scale = 1 + scrollTop / limit / 3;

      if (scrollTop > limit) {
        return;
      }

      $topImage.css({
        opacity: opacity
      });

      $topImage.find(".center .main-title h1").css({
        opacity: opacity,
        transform: "scale(" + scale + ")"
      });
    }

    $(
      ".side-title-right .paralex-sec span, .side-title-left .paralex-sec span"
    ).each(function () {
      var windowHeight = $(window).height(),
        divPos = $(this).offset().top,
        topOfWindow = $(window).scrollTop();

      if (divPos < topOfWindow + windowHeight - 150) {
        $(this).addClass("slide-down");
      }
    });

    // Section fade in animation
    $(window).scroll(function () {
      inViewport();
    });

    $(window).resize(function () {
      inViewport();
    });

    function inViewport() {
      if ($(window).width() > 1024 || $(window).width() < 701) {
        $("section").each(function () {
          var windowHeight = $(window).height(),
            divPos = $(this).offset().top,
            topOfWindow = $(window).scrollTop();

          if (divPos < topOfWindow + windowHeight - 150) {
            $(this).addClass("show-section");
          }
        });
      }
      $("body.home-page .main-logo").each(function () {
        var windowHeight = $(window).height(),
          topOfWindow = $(window).scrollTop();

        if (topOfWindow > windowHeight) {
          $(this).addClass("fade-out");
        } else {
          $(this).removeClass("fade-out");
        }
      });
    }
  });

  $(function () {
    setTimeout(function () {
      $(document).scrollTop(0)
    }, 0)
  });


  var straussContactFormAllowSubmit = false;
  // Handle reCaptcha for the contact-us form.
  $('#contact-message-feedback-form').submit(function () {
    if(!straussContactFormAllowSubmit) {
        event.preventDefault();
    } else {
      return;
    }
    // aaa
    // we stoped it
    // needs for recaptacha ready
    grecaptcha.ready(function () {
      // do request for recaptcha token
      // response is promise with passed token
        var prodSiteKey = '6Lc9DKMUAAAAAF0AD3foWephjHnZxcp4vhj4cw6O';
        var localSiteKey = '6LdwdaMUAAAAAHt_S1aPqjo1g3SdQ8a-vCdf-_-f';
        var devSiteKey = '6LfTDaMUAAAAAHeJSL_Rfr1OTm2FLnMKpBYCidw6';
      grecaptcha.execute(prodSiteKey, { action: 'create_comment' }).then(function (token) {
        // add token to form
        $('#contact-message-feedback-form').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
        straussContactFormAllowSubmit = true;

        // Click it again but this time let the server handle it.
        $('#contact-message-feedback-form #edit-submit').click();
      });
    });
  });
})(jQuery);






