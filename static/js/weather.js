// ✅ Coordonnées de Canet-en-Roussillon
const lat = 42.7;
const lon = 3.0;

// ✅ URL corrigée de l'API Open-Meteo (utilisation de "water_temperature" au lieu de "sea_surface_temperature")
const marineWeatherUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&hourly=wave_height,wind_speed,wind_direction,air_temperature,water_temperature&timezone=auto`;

/**
 * ✅ Fonction pour récupérer les données météo maritimes via Open-Meteo
 */
function fetchMarineWeather() {
    console.log("🌍 Récupération des données météo...");
    console.log("📡 API URL :", marineWeatherUrl);

    fetch(marineWeatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("📊 Données Open-Meteo :", data);

            if (data && data.hourly) {
                let index = 0; // Prendre la première donnée disponible

                // ✅ Vérification des valeurs avant l'affichage pour éviter les erreurs
                document.getElementById("temp-air").textContent = (data.hourly.air_temperature?.[index] ?? "--") + " °C";
                document.getElementById("temp-water").textContent = (data.hourly.water_temperature?.[index] ?? "--") + " °C";
                document.getElementById("wind-speed").textContent = (data.hourly.wind_speed?.[index] ?? "--") + " km/h";
                document.getElementById("wind-dir").textContent = (data.hourly.wind_direction?.[index] ?? "--") + "°";
                document.getElementById("wave-height").textContent = (data.hourly.wave_height?.[index] ?? "--") + " m";
                document.getElementById("tide").textContent = "Non disponible"; // Open-Meteo ne fournit pas les marées
            } else {
                console.error("❌ Erreur : Données Open-Meteo non disponibles.");
            }
        })
        .catch(error => console.error("❌ Erreur lors de la récupération météo :", error));
}

// ✅ Charger les données météo au chargement de la page
document.addEventListener("DOMContentLoaded", fetchMarineWeather);

/**
 * ✅ Fonction pour initialiser la carte Windy
 */
function initWindyMap() {
    console.log("🚀 Chargement de Windy...");

    // ✅ Vérifier si l'API Windy est bien chargée avant d'exécuter windyInit()
    if (typeof windyInit === "undefined") {
        console.error("❌ Windy API non chargée !");
        return;
    }

    // ✅ Options de la carte
    const options = {
        key: 'auzPj4DKneQdPce8Lv1p9WDz1YwBM5Yi', // Remplace par ta clé API Windy
        lat: 42.7,
        lon: 3.0,
        zoom: 5,
        container: "map-container",
    };

    // ✅ Initialisation de Windy avec gestion des erreurs
    windyInit(options, function (windyAPI) {
        console.log("✔️ Carte Windy chargée !");
        const { map, store, picker } = windyAPI;

        store.set("overlay", "wind", "temp", "waves", "clouds", "rain", "satellite"); // Carte windy

        // ✅ Afficher les données quand l'utilisateur clique sur la carte
        picker.on("pickerOpened", function (position) {
            const params = picker.getParams();
            updateWeatherFromPicker(params);
        });

        // ✅ Ouvrir automatiquement le picker après le chargement
        setTimeout(() => {
            picker.open({ lat: 42.7, lon: 3.0 });
            setTimeout(() => {
                updateWeatherFromPicker(picker.getParams());
            }, 1000);
        }, 2000);
    });
}

/**
 * ✅ Fonction pour activer le mode "Plein écran" pour la carte météo
 */
document.getElementById("fullscreen-btn").addEventListener("click", function () {
    let mapContainer = document.getElementById("map-container");

    if (!document.fullscreenElement) {
        mapContainer.requestFullscreen()
            .then(() => {
                mapContainer.style.width = "100vw";
                mapContainer.style.height = "100vh";
            })
            .catch(err => {
                alert(`Erreur: ${err.message}`);
            });
    } else {
        document.exitFullscreen();
    }
});

// ✅ Écouteur d'événement pour détecter la sortie du mode plein écran et rétablir la taille d'origine
document.addEventListener("fullscreenchange", function () {
    let mapContainer = document.getElementById("map-container");

    if (!document.fullscreenElement) {
        mapContainer.style.width = "950px";
        mapContainer.style.height = "450px";
    }
});

/**
 * ✅ Exécuter l'initialisation de Windy après le chargement du DOM
 */
document.addEventListener("DOMContentLoaded", function () {
    try {
        initWindyMap();
    } catch (error) {
        console.error("❌ Erreur lors de l'initialisation de Windy :", error);
    }
});
