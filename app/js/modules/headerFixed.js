(function () {

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
  window.setHeaderFixed = setHeaderFixed;
}());
