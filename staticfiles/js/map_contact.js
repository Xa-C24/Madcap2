
document.addEventListener("DOMContentLoaded", function() {
    // Initialisation de la carte et positionnement sur les coordonnées Canet en Roussilon
    var map = L.map('map').setView([42.702099, 3.035912], 10); // Coordonnées de Genève

    // Carte OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Indique l'emplacement du bateau 
    var marker = L.marker([42.702099, 3.035912],).addTo(map);
    marker.bindPopup("<b>Madcap 1874</b>").openPopup();
});
