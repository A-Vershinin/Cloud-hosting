(function () {

  function showTooltipe(arrTooltipe, timeShow, timeFade) {
    $("." + arrTooltipe).hover(
      function (e) {
        e.preventDefault();
        var $this = $(this);
        var curentElem = $this.attr("data-id");
        $("#" + curentElem).fadeIn(timeShow);
      },
      function () {
        var $this = $(this);
        var curentElem = $this.attr("data-id");
        $("#" + curentElem).fadeOut(timeFade);
      }
    );
  }
  window.showTooltipe = showTooltipe;
}());
