document.addEventListener("DOMContentLoaded", function () {
  const meteoUrl = "https://api.open-meteo.com/v1/forecast?latitude=42.7056&longitude=3.0385&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/Paris";


  fetch(meteoUrl)
      .then(response => response.json())
      .then(data => {
          console.log("Données reçues de l'API Open-Meteo :", data);

          if (!data.current_weather) {
              throw new Error("❌ Les données météo actuelles ne sont pas disponibles !");
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

          // Mettre à jour l'affichage
          document.getElementById("temperature-air").innerText = `${temperatureAir}°`;
          document.getElementById("vent-vitesse").innerText = `${ventVitesse}`;
          document.getElementById("vent-direction").innerText = `${ventDirection}`;
          document.getElementById("weather-condition").innerText = meteoTexte;
          document.getElementById("weather-icon").innerHTML = meteoIcone;

          // Affichage de l'heure et de la date actuelle
          const now = new Date();
          const heure = now.getHours().toString().padStart(2, "0");
          const minutes = now.getMinutes().toString().padStart(2, "0");
          const jour = now.toLocaleDateString("fr-FR", { weekday: "short" }).toUpperCase();
          const date = now.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });

          document.getElementById("current-time").innerText = `${heure}:${minutes}`;
          document.getElementById("current-date").innerText = `${jour} ${date}`;
      })
      .catch(error => console.error("❌ Erreur lors de la récupération des données météo :", error));
});
