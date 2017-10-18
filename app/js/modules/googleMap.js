(function () {
  // var initialMap = google.maps.event.addDomListener(window, 'load', init);

  function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(40.708, -74.02), // New York
      styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    };
    var mapElement = document.getElementById('google-map');
    var map = new google.maps.Map(mapElement, mapOptions);

    // Enable scroll zoom after click on map
    map.addListener("click", function() {
      map.setOptions({
        scrollwheel: true
      });
    });

    // Enable scroll zoom after drag on map
    map.addListener("drag", function() {
      map.setOptions({
        scrollwheel: true,
      });
    });

    // Disable scroll zoom when mouse leave map
    map.addListener("mouseout", function() {
      map.setOptions({
        scrollwheel: false
      });
    });

    var neighborhoods = [
      // Main
      {lat: 40.708, lng: -74.009, title: 'Cloud Hosting', decr: 'Main office', icon: 'map-pin.png'},
      {lat: 40.712, lng: -74.016, title: 'Cloud Hosting', decr: 'Second office', icon: 'map-pin.png'},
    ];

    infoWindow = new google.maps.InfoWindow();

    function displayMarkers() {
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < neighborhoods.length; i++){
        var latlng = new google.maps.LatLng(neighborhoods[i].lat, neighborhoods[i].lng);
        var name = neighborhoods[i].title;
        var about = neighborhoods[i].decr;
        var icon = neighborhoods[i].icon;
        createMarker(latlng, name, about, icon, i * 750);
        bounds.extend(latlng);
      }
    }


    function createMarker(latlng, title, decr, icon, timeout) {
      window.setTimeout(function() {
        var marker = new google.maps.Marker({
          map: map,
          position: latlng,
          clickable: true,
          icon: {
            url: "img/decor/" + icon
          },
          animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(marker, 'click', function() {
          var infoContent = '<div id="contacs__map-info">' +
            '<div class="contacs__map-title">' + title + '</div>' +
            '<div class="contacs__map-decr">' +  decr + '</div></div>';

          infoWindow.setContent(infoContent);
          infoWindow.open(map, marker);
        });
      }, timeout);
    }
    displayMarkers();

    /* Map center on resize
    =========================*/
    var getCen = map.getCenter();
    google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(getCen);
    });

  }

  window.initialMap = init;
}());
