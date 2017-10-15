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


    // добавляем активный класс header--fixed
    var headerFixed = setHeaderFixed("js-header", "header--fixed");

    function setHeaderFixed(jsHeader, fixedClass) {
      var header = $("#" + jsHeader),
        headerHeight = header.height(),
        headerBottom = header.children().last(),
        headerTopHeight = header.children().first().height();
      $(document).on("scroll", function () {
        var documentScroll = $(this).scrollTop();
        if (documentScroll > headerHeight) {
          header.addClass(fixedClass);
          headerBottom.css({
            "marginTop": headerTopHeight
          });
        } else {
          headerBottom.removeAttr("style");
          header.removeClass(fixedClass);
        }
      });
    }

    // скролл по секциями
    var scrollToSections = setScrollToSections("header__top", "menu__link", 750);
    function setScrollToSections(headerTop, link, timeScroll) {
      var link = $("." + link);
      var headerTop = $("." + headerTop).height();

      link.on("click", function scrollHandler(e) {
        e.preventDefault();
        var currentBlock = $(this).attr("href");
        var currentBlockOffset = $("#" + currentBlock).offset().top;

        $("html, body").animate({
          scrollTop: currentBlockOffset - headerTop
        }, timeScroll);
      });
    }

    // попапы на кнопке login и кнопках order
    var popups = togglePopup("js-show-popup", "js-modal-close", 500, 300);
    function togglePopup(popup, popupClose, timeShow, timeHidden) {
      $("." + popup).on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var currentModal = $this.attr("data-popup");
        $(currentModal).fadeIn(timeShow);
        $(".overlay").fadeIn(timeShow);
      });

      $("." + popupClose).on("click", function (e) {
        e.preventDefault();
        $(this).parent().fadeOut(timeHidden);
        $(".overlay").fadeOut(timeHidden);
      });
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
