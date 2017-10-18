(function () {

  function initCounters(countItem1, countItem2) {
    var countComments = countItem1 || undefined;
    var countLikes = countItem2 || undefined;

    $("." + countComments).counterUp({
      time: 2000,
      beginAt: 0
    });

    $("." + countLikes).counterUp({
      time: 3000,
      beginAt: 0
    });
  }

  window.initCounters = initCounters;
}());
