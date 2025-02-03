/**
 * Fonction pour initialiser la carte Windy.
 */
function initWindyMap() {
  console.log("Chargement de Windy...");

  // Options de configuration de la carte Windy
  const options = {
      key: 'auzPj4DKneQdPce8Lv1p9WDz1YwBM5Yi', // Clé API Windy (à remplacer par la tienne)
      lat: 42.7,  // Latitude initiale (Canet-en-Roussillon)
      lon: 3.0,   // Longitude initiale
      zoom: 5,    // Niveau de zoom initial
  };

  // Initialisation de la carte Windy
  windyInit(options, function(windyAPI) {
      console.log("Carte Windy chargée !");
      
      // Récupération des éléments de l'API Windy
      const { map, store, picker } = windyAPI;

      // Définir la couche "vent" par défaut (on peut changer : "waves", "temperature", etc.)
      store.set("overlay", "wind");

      /**
       *  Quand on clique sur la carte, afficher les données météo correspondantes
       */
      picker.on("pickerOpened", function(position) {
          const params = picker.getParams(); // Récupère les données météo de la position cliquée

          // Mise à jour des éléments HTML avec les données météo
          document.getElementById("temp-air").innerText = params.temp; // Température de l'air
          document.getElementById("temp-water").innerText = params.waterTemp || "Non dispo"; // Température de l'eau
          document.getElementById("wind-speed").innerText = params.wind; // Vitesse du vent
          document.getElementById("wind-dir").innerText = params.windDirectionCardinal; // Direction du vent
          document.getElementById("wave-height").innerText = params.waves || "Non dispo"; // Hauteur des vagues
          document.getElementById("tide").innerText = params.tide || "Non dispo"; // Horaire de marée
      });

      // Ouvre le picker automatiquement au centre de la carte après 2 secondes
      setTimeout(() => {
          picker.open({ lat: 42.7, lon: 3.0 });
      }, 2000);
  });
}

/**
* Fonction pour charger Windy API dynamiquement
*/
function loadWindyAPI() {
  return new Promise((resolve, reject) => {
      console.log("Chargement de Windy API...");

      let script = document.createElement("script");
      script.src = "https://api.windy.com/assets/map-forecast/libBoot.js";
      script.async = true;
      script.defer = true;

      // Vérifie que l'API Windy est bien chargée avant d'exécuter la suite
      script.onload = () => {
          if (typeof windyInit === "function") {
              console.log("Windy API chargée !");
              resolve();
          } else {
              console.error("Windy API ne s'est pas correctement chargée.");
              reject("Erreur de chargement de Windy API");
          }
      };

      script.onerror = () => reject("Impossible de charger Windy API");

      document.body.appendChild(script); // Ajoute le script au DOM
  });
}

/**
*  Mode "Plein écran" pour la carte météo
*/
document.getElementById("fullscreen-btn").addEventListener("click", function() {
  let mapContainer = document.getElementById("map-container");

  if (!document.fullscreenElement) {
    // Passe uniquement le conteneur en plein écran
    mapContainer.requestFullscreen().then(() => {
        // Ajuste la taille pour remplir l'écran
        mapContainer.style.width = "100vw";
        mapContainer.style.height = "100vh";
    }).catch(err => {
        alert(`Erreur: ${err.message}`);
    });

  } else {
      // Quitte le mode plein écran
      document.exitFullscreen();
  }
});

// Écouteur d'événement pour détecter la sortie du mode plein écran
document.addEventListener("fullscreenchange", function() {
  let mapContainer = document.getElementById("map-container");

  if (!document.fullscreenElement) {
      // Retour aux dimensions d'origine
      mapContainer.style.width = "1050px";
      mapContainer.style.height = "450px";
  }
});
/**
* Exécuter l'initialisation après le chargement du DOM
*/
document.addEventListener("DOMContentLoaded", async function() {
  try {
      await loadWindyAPI(); // Attendre que Windy API soit chargée
      initWindyMap(); // Initialiser la carte après le chargement
  } catch (error) {
      console.error("Erreur lors de l'initialisation de Windy :", error);
  }
});
