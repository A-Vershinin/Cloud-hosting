// "use strict";

document.addEventListener("DOMContentLoaded", function() {
  (function() {


    nojsreplace();
    function nojsreplace() {
      // if (document.documentElement.html.className == "no-js") {
      //   document.body.classList.remove("no-js");
      // }
      // console.log(document.documentElement);
    }

    // toggleMenu();
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


    function scrollToSection() {
      var btn = document.getElementById("js-get-started");
      btn.addEventListener("click", function btnHandler(e) {
        e.preventDefault();
        var planOffSet = $("#js-plans").offset().top;


        $("html, body").animate({
          scrollTop: planOffSet
        }, 500);
        console.log(planOffSet);
      });
    }
    // scrollToSection();


    headerFixed("page", "js-header", "header--fixed"); // добавляем активный класс header--fixed
    function headerFixed(pageBlock, headerBlock, fixedClass) {
      const wrapper = document.getElementById(pageBlock) || null;
      const header = document.getElementById(headerBlock) || null;
      const headerFirstChild = header.firstElementChild || null;;
      const headerNextChild = header.lastElementChild || null;
      const headerFixedClass = fixedClass || undefined;
      const headerFirstChildHeight = headerFirstChild.offsetHeight + "px";

      wrapper.addEventListener("scroll", scrollHandler);
      function scrollHandler() {
        const scrolled = this.scrollTop;
        if (scrolled > header.offsetHeight) {
          header.classList.add(headerFixedClass);
          headerNextChild.style.marginTop = headerFirstChildHeight;
        } else {
          header.classList.remove(headerFixedClass);
          headerNextChild.removeAttribute("style");
        }
      }
    }







    // btn Up
    // btnCrollUp();
    function btnCrollUp() {
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
