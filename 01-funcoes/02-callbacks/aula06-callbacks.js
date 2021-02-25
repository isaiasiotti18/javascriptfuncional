let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximuAge: 0,
};

function success(pos) {
  let crd = pos.coords;

  console.log("Sua posição atual é:");
  console.log("Latitude : " + crd.latitude);
  console.log("Longitude: " + crd.longitude);
  console.log("Mais ou menos " + crd.accuracy + " metros.");
}

function error(err) {
  console.warn(`ERROR ${err.code} ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
