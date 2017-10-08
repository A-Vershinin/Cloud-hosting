"use strict";

document.addEventListener("DOMContentLoaded", function() {
  (function() {


    nojsreplace();
    function nojsreplace() {
      // if (document.documentElement.html.className == "no-js") {
      //   document.body.classList.remove("no-js");
      // }
      // console.log(document.documentElement);
    }

    toggleMenu();
    function toggleMenu() {
      var menuHam = $(".menu__hamburger");
      var menu = $(".menu__list");
      var action = $(".header__action");
      menuHam.on("click", function() {
        menuHam.toggleClass("is-active");
        menu.toggleClass("menu__list--mobile");
        action.toggleClass("header__action--mobile");
      });
    }





    // btn Up
    scrollUp();
    function scrollUp() {
      var winHeight = $(document).height(),
        step = 4,
        timeToScroll = winHeight / step,
        scrollUp = $(".scrollup");
      $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
          scrollUp.fadeIn();
        } else {
          scrollUp.fadeOut();
        }
      });
      scrollUp.on("click", function() {
        $(" html, body ").animate({scrollTop: 0}, timeToScroll);
      });
    }
  })();
});
