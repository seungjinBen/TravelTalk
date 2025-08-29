<a href = "/?id={.id}"></a>


db.query('SELECT * FROM place', function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  for (var i = 0; i < results.length; i++){
    console.log(results[i].placeType);
    console.log(results[i].placeName);
    console.log(results[i].lat);
    console.log(results[i].lng);
  }
});

db.end();

window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 48.863769, lng: 2.312777 },
      zoom: 12.5,
    });
    const malls = [
        { label: "A", name: "에투알 개선문", lat: 48.8735756, lng: 2.2891562 },
        { label: "B", name: "에펠탑", lat: 48.857953, lng: 2.296308 },
        { label: "C", name: "오르세 미술관", lat: 48.8612602, lng: 2.3205255 },
        { label: "D", name: "루브르 박물관", lat: 48.8612602, lng: 2.3205255 },
        { label: "E", name: "마레지구", lat: 48.8565248, lng: 2.3550645 },
        { label: "F", name: "몽마르뜨", lat: 48.8716213, lng: 2.324987 },
        { label: "G", name: "노트르담 대성당", lat: 48.8548642, lng: 2.3391383 },
      ];

    const bounds = new google.maps.LatLngBounds();
    const infowindow = new google.maps.InfoWindow();

    malls.forEach(({ label, name, lat, lng }) => {
        const marker = new google.maps.Marker({
          position: { lat, lng },
          label,
          map: map,
        });
        bounds.extend(marker.position);

        marker.addListener("click", () => {
            map.panTo(marker.position);
            infowindow.setContent(name);
            infowindow.open({
              anchor: marker,
              map,
            });
        });
    });

    map.fitBounds(bounds);
};




var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'seungjin1031!',
  database: 'travel'
});
db.connect();

window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 48.863769, lng: 2.312777 },
      zoom: 12.5,
    });
    db.query('SELECT * FROM place', function(error, results, fields){
      if (error) {
        console.log(error);
      }
      for (var i = 0; i < results.length; i++){
        placeType = results[i].placeType
        placeName = results[i].placeName
        lat = results[i].lat
        lng = results[i].lng
        const marker = new google.maps.Marker({
          position: { lat, lng },
          placeType,
          map: map,
        });
        bounds.extend(marker.position);

        marker.addListener("click", () => {
          map.panTo(marker.position);
          infowindow.setContent(placeName);
          infowindow.open({
            anchor: marker,
            map,
          });
      });
      }
    })

    const bounds = new google.maps.LatLngBounds();
    const infowindow = new google.maps.InfoWindow();

    map.fitBounds(bounds);
};


//
db.query('SELECT * FROM place', function(error, results, fields){
  if (error) {
    console.log(error);
  }
  else{
    for (var i = 0; i < results.length; i++){
      placeType = results[i].placeType
      placeName = results[i].placeName
      lat = results[i].lat
      lng = results[i].lng
      console.log(placeType)
      console.log(lat)
    }
}
});