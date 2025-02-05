
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
