let currentSlide = 0;

function changeSlide(direction) {
  const diaporama = document.querySelector('.diaporama');
  const images = document.querySelectorAll('.diaporama-image');

  // Vérifie si le conteneur et les images existent
  if (!diaporama || images.length === 0) {
    console.error('Le diaporama ou les images ne sont pas trouvés.');
    return;
  }

  const totalSlides = images.length;

  // Met à jour l'index de la slide actuelle
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Applique la translation en fonction de l'index actuel
  diaporama.style.transform = `translateX(-${currentSlide * 100}%)`;
}
