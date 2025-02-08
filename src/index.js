let map;
let marker;

function fetchISSData() {
  fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then((response) => response.json())
    .then((data) => {
      updateIssData(data);
      if (!map) {
        initializeMap(data);
      } else {
        updateMap(data);
      }
    })
    .catch((error) => console.error("Error fetching ISS data:", error));
}

function roundNumber(value, dec) {
  return Number.parseFloat(value).toFixed(dec);
}

function updateIssData(data) {
  document.getElementById("latitude").textContent = roundNumber(
    data.latitude,
    2,
  );
  document.getElementById("longitude").textContent = roundNumber(
    data.longitude,
    2,
  );
  document.getElementById("altitude").textContent = roundNumber(
    data.altitude,
    2,
  );
  document.getElementById("velocity").textContent = roundNumber(
    data.velocity,
    2,
  );
  document.getElementById("visibility").textContent = data.visibility;
  document.getElementById("timestamp").textContent = new Date(
    data.timestamp * 1000,
  ).toLocaleString();
}

function initializeMap(data) {
  map = L.map("map", {
    center: [data.latitude, data.longitude],
    zoom: 4.5,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    crossOrigin: true,
  }).addTo(map);

  // Create a custom icon for the ISS marker
  const issIcon = L.icon({
    iconUrl: "../public/images/iss-icon.png",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });

  marker = L.marker([data.latitude, data.longitude], {
    icon: issIcon,
  }).addTo(map);
}

function updateMap(data) {
  if (marker) {
    // Move the marker to the new coordinates
    marker.setLatLng([data.latitude, data.longitude]);
    // Update the map view to keep the ISS centered
    map.setView([data.latitude, data.longitude], map.getZoom());
  }
}

setInterval(fetchISSData, 5000);

fetchISSData();
