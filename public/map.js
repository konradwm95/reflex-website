var map = L.map('map').setView([49.762, 19.089], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
L.marker([49.762, 19.089]).addTo(map)
.bindPopup("<b>Pracownia Psychologii Transportu</b><br>ul. Wyzwolenia 47, <br>43-365 Wilkowice")
.openPopup();