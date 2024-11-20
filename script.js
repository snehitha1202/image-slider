let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    const caption = document.querySelector('.caption');
    caption.textContent = slides[currentSlide].getAttribute('data-caption');

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto-slide functionality
setInterval(() => {
    changeSlide(1);
}, 3000); // Change slide every 3 seconds

// Initially show the first slide
showSlide(currentSlide);
