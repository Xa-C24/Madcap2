
/**
 *  Fonction pour initialiser la carte Windy
 */
function initWindyMap() {
  console.log("🚀 Chargement de Windy...");

  //  Vérifier si l'API Windy est bien chargée avant d'exécuter windyInit()
  if (typeof windyInit === "undefined") {
      console.error("❌ Windy API non chargée !");
      return;
  }

  //  Options de la carte
  const options = {
      key: 'auzPj4DKneQdPce8Lv1p9WDz1YwBM5Yi', // clé API Windy
      lat: 42.7,
      lon: 3.0,
      zoom: 5,
      container: "map-container",
  };

  //  Initialisation de Windy avec gestion des erreurs
  windyInit(options, function (windyAPI) {
      console.log("✔️ Carte Windy chargée !");
      const { map, store, picker } = windyAPI;

      store.set("overlay", "wind", "temp", "waves", "clouds", "rain", "satellite"); // Carte windy

      // Affiche les données quand l'utilisateur clique sur la carte
      picker.on("pickerOpened", function (position) {
          const params = picker.getParams();
          updateWeatherFromPicker(params);
      });

      //  Ouvrir automatiquement le picker après le chargement
      setTimeout(() => {
          picker.open({ lat: 42.7, lon: 3.0 });
          setTimeout(() => {
              updateWeatherFromPicker(picker.getParams());
          }, 1000);
      }, 2000);
  });
}

/**
*  Fonction pour activer le mode "Plein écran" pour la carte météo
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

// Écouteu d'événement pour détecter la sortie du mode plein écran et rétablir la taille d'origine
document.addEventListener("fullscreenchange", function () {
    let mapContainer = document.getElementById("map-container");
    let iframe = mapContainer.querySelector("iframe");

  if (!document.fullscreenElement) {
      mapContainer.style.width = "950px";
      mapContainer.style.height = "450px";
      iframe.style.width = "950px";
      iframe.style.height = "450px";
    } else {
      mapContainer.style.width = "100vw";
      mapContainer.style.height = "100vh";
      iframe.style.width = "100vw";
      iframe.style.height = "100vh";
  }
});

/**
*  Exécute l'initialisation de Windy après le chargement du DOM
*/
document.addEventListener("DOMContentLoaded", function () {
  try {
      initWindyMap();
  } catch (error) {
      console.error("❌ Erreur lors de l'initialisation de Windy :", error);
  }
});

/* Centre la carte au milieu de l'ecran après avoir cliqué sur le logo mété du header */

document.addEventListener("DOMContentLoaded", function () {
  const weatherLogo = document.querySelector(".nav-weather-logo a");
  const mapSection = document.getElementById("map-container");

  if (weatherLogo && mapSection) {
      weatherLogo.addEventListener("click", function (event) {
          event.preventDefault(); // Empêche le comportement par défaut du lien

          //  Calcul du scroll pour centrer la carte Windy sur l'écran
          const mapTop = mapSection.getBoundingClientRect().top + window.scrollY;
          const windowHeight = window.innerHeight;
          const mapHeight = mapSection.clientHeight;

          // Position cible pour centrer la carte
          const scrollToPosition = mapTop - (windowHeight / 2) + (mapHeight / 2);

          //  Animation de défilement fluide
          window.scrollTo({
              top: scrollToPosition,
              behavior: "smooth"
          });
      });
  }
});