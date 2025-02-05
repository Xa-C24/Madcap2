document.addEventListener('DOMContentLoaded', function() {
  // Sélection des éléments
  const diaporama = document.querySelector('.diaporama');
  const images = document.querySelectorAll('.diaporama img');
  const nbImages = images.length;
  let index = 0;

  // Fonction pour afficher l'image suivante
  function suivante() {
      if (images[index]) {
          images[index].classList.remove('active');
          index = (index + 1) % nbImages;
          images[index].classList.add('active');
      }
  }

  // Fonction pour afficher l'image précédente
  function precedente() {
      if (images[index]) {
          images[index].classList.remove('active');
          index = (index - 1 + nbImages) % nbImages;
          images[index].classList.add('active');
      }
  }

  // Initialisation : on active la première image
  if (images.length > 0) {
      images[0].classList.add('active');
  }

  // Défilement automatique toutes les 3 secondes
  let interval = setInterval(suivante, 3000);

  // Ajout des écouteurs d'événements sur les boutons
  const btnSuivant = document.querySelector('.suivant');
  const btnPrecedent = document.querySelector('.precedent');

  if (btnSuivant) {
      btnSuivant.addEventListener('click', () => {
          clearInterval(interval);
          suivante();
          interval = setInterval(suivante, 3000);
      });
  }

  if (btnPrecedent) {
      btnPrecedent.addEventListener('click', () => {
          clearInterval(interval);
          precedente();
          interval = setInterval(suivante, 3000);
      });
  }
});