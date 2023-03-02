// /set map options// this is choosing where the map will display with the latitude and longitude
var myLatLng = { lat: 35.2271, lng: -80.8431 };
var mapOptions = {
    center: myLatLng,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

var marker1 = new google.maps.Marker({
    position: {lat: 35.089720, lng: -80.858410},
    map: map,
    title: 'Huntington learning Center'
  });
  // Add a click event listener to the marker
    marker1.addListener('click', function() {
    // Code to execute when the marker is clicked
    alert('Address:  8320 Pineville-Matthews Rd Suite 605, Charlotte, NC 28226 ');
  });

  var marker2 = new google.maps.Marker({
    position: {lat: 35.097120, lng: -80.780670},
    map: map,
    title: 'C2 Education of Charlotte'
  });
    // Add a click event listener to the marker
    marker2.addListener('click', function() {
        // Code to execute when the marker is clicked
        alert('Address:  8036 Providence Rd #1100, Charlotte, NC 28277 ');
      });
  var marker3 = new google.maps.Marker({
    position: {lat: 35.135120, lng: -80.780340},
    map: map,
    title: 'Kumon Math & Reading Center'
  });
  marker3.addListener('click', function() {
    // Code to execute when the marker is clicked
    alert('Address:  5664 International Dr Suite E, Charlotte, NC 28270 ');
  });
  var marker4 = new google.maps.Marker({
    position: {lat: 35.160550, lng: -80.850100},
    map: map,
    title: 'Lazar Center Charlote'
  });
  marker4.addListener('click', function() {
    // Code to execute when the marker is clicked
    alert('Address:  5126 Park Rd #2d, Charlotte, NC 28209 ');
  });
  var marker5 = new google.maps.Marker({
    position: {lat: 35.135120, lng: 35.173180},
    map: map,
    title: 'Swan Learning Center'
  });
  marker5.addListener('click', function() {
    // Code to execute when the marker is clicked
    alert('Address:  427 S Sharon Amity Rd, Charlotte, NC 28211 ');
  });
  var marker6 = new google.maps.Marker({
    position: {lat: 35.163000, lng: -80.743640},
    map: map,
    title: 'Tutor Doctor Central Charlotte'
  });
  marker6.addListener('click', function() {
    // Code to execute when the marker is clicked
    alert('Address:  2180 Winthrop Chase Dr, Charlotte, NC 28212 ');
  });
  var marker7 = new google.maps.Marker({
    position: {lat: 35.221437, lng: -80.723611},
    map: map,
    title: 'Wiz Kidz Tutoring'
  });
  marker7.addListener('click', function() {
    // Code to execute when the marker is clicked
    alert('Address:  7209 E W.T. Harris Blvd ste j, Charlotte, NC 28227 ');
  });
  var marker8 = new google.maps.Marker({
    position: {lat: 35.318728, lng: -80.775098},
    map: map,
    title: 'Sylvan Learning of Charlotte-University Area'
  });
  marker8.addListener('click', function() {
    // Code to execute when the marker is clicked
    alert('Address:  8310 Medical Plaza Dr STE F, Charlotte, NC 28262 ');
  });
//   marker.setMap(map);
//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();
//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();
//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);
//define calcRoute function
function calcRoute() {
    //create request
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }
    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            //Get distance and time
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";
            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);
            //show error message
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });
}
//create autocomplete objects for all inputs
var options = {
    types: ['(cities)']
}
var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);
var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);






















