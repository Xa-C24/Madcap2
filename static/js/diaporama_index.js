let currentSlide = 0;
let autoSlideInterval;

function setupInfiniteLoop() {
  const diaporama = document.querySelector('.diaporama');
  const images = document.querySelectorAll('.diaporama-image');

  if (!diaporama || images.length === 0) {
    console.error('Le diaporama ou les images ne sont pas trouvés.');
    return;
  }

  // Clone la première et la dernière image
  const firstClone = images[0].cloneNode(true);
  const lastClone = images[images.length - 1].cloneNode(true);

  // Ajoute les clones aux extrémités du conteneur
  diaporama.appendChild(firstClone);
  diaporama.insertBefore(lastClone, images[0]);

  // Ajuste la position initiale pour afficher la première vraie image
  diaporama.style.transform = `translateX(-${850}px)`; // Largeur = 750px
}

function changeSlide(direction) {
  const diaporama = document.querySelector('.diaporama');
  const images = document.querySelectorAll('.diaporama-image');

  if (!diaporama || images.length === 0) {
    console.error('Le diaporama ou les images ne sont pas trouvés.');
    return;
  }

  const totalSlides = images.length;

  // Met à jour l'index de la slide actuelle
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Applique la translation en fonction de l'index actuel
  diaporama.style.transform = `translateX(-${currentSlide * 850}px)`; // Largeur = 800px
}

// Fonction pour démarrer le défilement automatique
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    changeSlide(1); // Passe à la prochaine slide
  }, 7000); // Change toutes les 3 secondes
}

// Fonction pour arrêter le défilement automatique
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Démarrage du défilement automatique au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  startAutoSlide();

  // Stoppe le défilement automatique si la souris passe sur le diaporama
  const diaporamaIndex = document.querySelector('.diaporama-index');
  diaporamaIndex.addEventListener('mouseenter', stopAutoSlide);

  // Redémarre le défilement automatique si la souris quitte le diaporama
  diaporamaIndex.addEventListener('mouseleave', startAutoSlide);
});
