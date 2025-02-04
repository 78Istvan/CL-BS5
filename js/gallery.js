// JavaScript for the Lightbox functionality
let currentIndex = 0;

const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Open lightbox with clicked image
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        openLightbox();
    });
});

// Open lightbox and show current image
function openLightbox() {
    lightbox.style.display = 'flex';
    lightboxImg.src = galleryItems[currentIndex].src;
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Move to previous or next image
function moveSlide(direction) {
    currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
}
