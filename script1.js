const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let counter = 1;
const slideWidth = images[0].clientWidth;
const totalSlides = images.length;

function slide() {
    if (counter >= totalSlides) {
        counter = 0;
    }
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(${-slideWidth * counter}px)`;
    counter++;
}

setInterval(slide, 3000); // Adjust the slide interval (in milliseconds) as desired
