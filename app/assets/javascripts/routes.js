      function initMap2(start,end,middle) {
        var start = new google.maps.LatLng(start[0].x, start[0].y);
        var end = new google.maps.LatLng(end[0].x, end[0].y)

        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: start
        });
        directionsDisplay.setMap(map);
        
        var middlePoints = [];
        var aucs;
        for (var i = 0; i < middle[0].length; i++) {
          aucs = new google.maps.LatLng(middle[0][i].x, middle[0][i].y);
          middlePoints.push({
              location: aucs,
              stopover: true
            });
        }
        directionsService.route({
          origin: start,
          destination: end,          
          optimizeWaypoints: true,
          waypoints: middlePoints,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
            var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';
            for (var i = 0; i < route.legs.length; i++) {
              var routeSegment = i + 1;
              summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                  '</b><br>';
              summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
              summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
              summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
            }
          } else {
            window.alert('Directions request failed due to ' + status);
          }
          return response; 
        });

      }
