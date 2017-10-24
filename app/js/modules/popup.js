(function () {

  function togglePopup(popup, popupClose, timeShow, timeHidden) {
    $("." + popup).on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var currentModal = $this.attr("data-popup");
      $(currentModal).fadeIn(timeShow);
      $(".overlay").fadeIn(timeShow);
      $(".wrapper").addClass("wrapper--blured");

    });

    $("." + popupClose).on("click", function (e) {
      e.preventDefault();
      $(this).parent().fadeOut(timeHidden);
      $(".overlay").fadeOut(timeHidden);
      $(".wrapper").removeClass("wrapper--blured");
    });

    $(".wrapper").on("click", ".overlay", function() {
      $(".modal").fadeOut(timeHidden);
      $(".overlay").fadeOut(timeHidden);
      $(".wrapper").removeClass("wrapper--blured");
    });
  }
  window.togglePopup = togglePopup;
}());
