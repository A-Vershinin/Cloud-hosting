"use strict";

document.addEventListener("DOMContentLoaded", function() {
  (function() {


    function nojsreplace() {
      // if (document.documentElement.html.className == "no-js") {
      //   document.body.classList.remove("no-js");
      // }
      // console.log(document.documentElement);
    }

    // toggleMenu
    // var headerNav = toggleMenu();

    // добавляем активный класс header--fixed
    var headerFixed = setHeaderFixed("js-header", "header--fixed");

    // скролл по секциями
    var scrollToSections = setScrollToSections("header__top", "menu__link", 750);

    // попапы на кнопке login и кнопках order
    var popups = togglePopup("js-show-popup", "js-modal-close", 400, 250);

    // тултипы
    var tooltipe = showTooltipe("js-tooltipe", 400, 200);

    // text show more
    var textShowMore = showPostText("js-read-more", "post__text--hidden", "Read More", "Hidden");

    // слайдер в блоке Testimonials
    var slider = setSlider("testi__list");

    // animation on elemets
    var wowOnPage = wowAnimated();

    // google maps with pins and content
    var googleMap = google.maps.event.addDomListener(window, 'load', initialMap);

    // counters in blog section
    var blogCounts = initCounters("post__info-count-comments", "post__info-count-likes");

    // validation email
    var formValidation = setFormValidation("subscribe__form");
    // btn Up
    // var btnUp = btnSrollUp("scrollup");

  })();
});
