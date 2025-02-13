document.addEventListener("DOMContentLoaded", function () {
  const meteoUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=42.7056&longitude=3.0385&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/Paris";

  fetch(meteoUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Données reçues de l'API Open-Meteo :", data);

      if (!data.current_weather || !data.daily) {
        throw new Error("❌ Les données météo ne sont pas disponibles !");
      }

      const meteo = data.current_weather;
      const temperatureAir = meteo.temperature ?? "N/A";
      const ventVitesse = meteo.windspeed ?? "N/A";
      const ventDirection = meteo.winddirection ?? "N/A";
      const weatherCode = meteo.weathercode ?? "N/A";

      // Traduction du weatherCode avec icônes
      const conditions = {
        0: { text: "Soleil, grand beau aujourd'hui", icon: "☀️" },
        1: { text: "🌤️ Peu nuageux", icon: "🌤️" },
        2: { text: "⛅ Partiellement nuageux", icon: "⛅" },
        3: { text: "☁️ Nuageux", icon: "☁️" },
        45: { text: "🌫️ Brouillard", icon: "🌫️" },
        51: { text: "🌧️ Pluie légère", icon: "🌧️" },
        61: { text: "🌧️ Pluie modérée", icon: "🌧️🌧️" },
        80: { text: "🌦️ Averses", icon: "🌦️" },
        81: { text: "🌦️🌦️ Averses modérées", icon: "🌦️🌦️" },
        82: { text: "🌦️🌦️🌦️ Averses fortes", icon: "🌦️🌦️🌦️" },
        95: { text: "⛈️ Orage", icon: "⛈️" },
      };

      const meteoTexte = conditions[weatherCode]?.text || "🌍 Indisponible";
      const meteoIcone = conditions[weatherCode]?.icon || "❓";

      // Mettre à jour l'affichage des données météo actuelles
      document.getElementById("temperature-air").innerText = `${temperatureAir}°C`;
      document.getElementById("vent-vitesse").innerText = `${(ventVitesse * 0.539957).toFixed(1)} kt`;
      document.getElementById("vent-direction").innerText = `${ventDirection}`;
      document.getElementById("weather-icon").innerHTML = meteoTexte;;

      // Vérifier si les prévisions existent
      if (!data.daily.time || !data.daily.temperature_2m_max || !data.daily.temperature_2m_min) {
        console.error("⚠️ Prévisions météo incomplètes !");
        return;
      }

      // Ajout des prévisions météo pour les 3 prochains jours
      for (let i = 1; i <= 3; i++) {
        let dateForecast = new Date(data.daily.time[i]);
        let dayName = dateForecast.toLocaleDateString("fr-FR", { weekday: "long" });
    let dayNumber = dateForecast.getDate(); // Numéro du jour

    let fullDate = `${dayName} ${dayNumber}`; 

    // 🔄 Inversion des températures min/max
    let tempMin = data.daily.temperature_2m_min[i];
    let tempMax = data.daily.temperature_2m_max[i];

    // Mise à jour de l'affichage
    document.getElementById(`forecast-${i}-date`).innerText = fullDate;
    document.getElementById(`forecast-${i}-temp`).innerText = `${tempMin}°C / ${tempMax}°C`;
    }

    })
    .catch((error) => console.error("❌ Erreur lors de la récupération des données météo :", error));
});

      // Fonction pour mettre à jour la date du jour
      function updateDate() {
        const now = new Date();
        const options = { weekday: "long", day: "numeric", month: "long" };
        const dateStr = now.toLocaleDateString("fr-FR", options);
        document.getElementById("current-date").innerText = dateStr;
      }

// Appel de la fonction au chargement de la page
updateDate();
