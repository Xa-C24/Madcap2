// static/js/search.js
function searchMembers() {
  const query = document.getElementById("search-input").value;
  console.log("Requête : ", query);
  const xhr = new XMLHttpRequest();

  // Construisez l'URL en fonction de la recherche
  const url = query ? `/admin-dashboard/?q=${query}` : `/admin-dashboard/`;
  console.log("URL utilisée : ", url);

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          console.log("Statut de la requête : ", xhr.status);
          if (xhr.status === 200) {
              try {
                  const response = JSON.parse(xhr.responseText);
                  console.log("Réponse JSON : ", response);
                  document.getElementById("members-table").innerHTML = response.html;
              } catch (error) {
                  console.error("Erreur lors du parsing JSON : ", error);
              }
          } else {
              console.error("Erreur lors de la recherche.");
          }
      }
  };

  xhr.send();
}

