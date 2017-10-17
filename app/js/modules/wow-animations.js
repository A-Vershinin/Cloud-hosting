(function () {

  // documentation https://github.com/matthieua/WOW
  function wowAnimated() {
    let wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 150,
      mobile: false
    });
    wow.init();
  }
  window.wowAnimated = wowAnimated;
}());
