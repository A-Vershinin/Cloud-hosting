(function () {

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
  window.setScrollToSections = setScrollToSections;
}());
