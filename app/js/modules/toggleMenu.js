(function () {

  function toggleMenu() {
    var menuHam = $(".menu__hamburger");
    var menu = $(".menu__list");
    var action = $(".header__action");
    menuHam.on("click", function () {
      menuHam.toggleClass("is-active");
      menu.toggleClass("menu__list--mobile");
      action.toggleClass("header__action--mobile");
    });
  }

  window.toggleMenu = toggleMenu;
}());
