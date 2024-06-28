// const indicators = document.querySelectorAll('.indicator');
// const slides = document.querySelector('.slides');
// let currentIndex = 0;

// function updateIndicators() {
//     indicators.forEach((indicator, index) => {
//         indicator.classList.toggle('active', index === currentIndex);
//     });
// }

// function showSlide(index) {
//     slides.style.transform = `translateX(${-index * 1135}px)`;
//     currentIndex = index;
//     updateIndicators();
// }

// indicators.forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//         showSlide(index);
//     });
// });

// updateIndicators();

const indicators = document.querySelectorAll('.indicator');
const slides = document.querySelector('.slides');
let currentIndex = 0;

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function showSlide(index) {
    const slideWidth = slides.querySelector('.slide').offsetWidth; // Get the width of one slide
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
    currentIndex = index;
    updateIndicators();
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});

updateIndicators();

