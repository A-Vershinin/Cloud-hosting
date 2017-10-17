(function () {

  function btnSrollUp(btnClass) {
    var winHeight = $(document).height(),
      step = 4,
      timeToScroll = winHeight / step,
      scrollUp = $("." + btnClass);
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
  window.btnSrollUp = btnSrollUp;
}());
