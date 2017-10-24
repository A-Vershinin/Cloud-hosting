(function () {

  function showPostText(clickItem, hiddenClass, currentText, hiddenTex) {
    var hiddenTex = hiddenTex || undefined;
    var currentText = currentText || undefined;
    var hiddenClass = hiddenClass || undefined;
    var clickItem = clickItem || undefined;
    $("." + clickItem).on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      if ($this.text() === currentText) {
        $this.text(hiddenTex);
      } else {
        $this.text(currentText);
      }
      $this.prev().toggleClass(hiddenClass);
    });
  }
  window.showPostText = showPostText;
}());

(function () {

}());
