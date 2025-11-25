// Toggle menu for small screens
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Generic carousel initializer
function initCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  const slides = carousel.querySelector('.slides');
  const slideItems = carousel.querySelectorAll('.slide');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  let index = 0;
  let autoPlayInterval;

  function showSlide(i) {
    index = (i + slideItems.length) % slideItems.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() { showSlide(index + 1); }
  function prevSlide() { showSlide(index - 1); }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Autoplay
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 4000);
  }
  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  slides.addEventListener('mouseenter', stopAutoPlay);
  slides.addEventListener('mouseleave', startAutoPlay);

  startAutoPlay();
}

// Initialize all carousels
['carousel1', 'carousel2', 'carousel3'].forEach(initCarousel);

// Lightbox
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

// Open lightbox on image click
document.querySelectorAll('.slide img, .poster img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
  });
});

// Close lightbox on click
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
});
