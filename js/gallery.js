// Get all the gallery images and the lightbox elements
const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');

// Add click event to each image to show it in the lightbox
images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImage.src = image.src;
  });
});

// Function to close the lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}
