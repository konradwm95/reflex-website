var map = L.map('map', { dragging: !L.Browser.mobile, scrollWheelZoom: false }).setView([49.762, 19.089], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
L.marker([49.762, 19.089]).addTo(map)
.bindPopup("<b>Psychologia Transportu</b><br>ul. Wyzwolenia 81, <br>43-365 Wilkowice")
.openPopup();