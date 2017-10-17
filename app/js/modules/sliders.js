(function () {

  function setSlider(sliderClass) {
    var currentSlider = $("." + sliderClass);

    currentSlider.slick({
      dots: false,
      infinite: true,
      adaptiveHeight: true,
      autoplay: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: ".testi__arrow--prev",
      nextArrow: ".testi__arrow--next",
      responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }
  window.setSlider = setSlider;
}());
