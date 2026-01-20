const headerBlock = document.querySelector('.header-block');

const backgrounds = {
    buttonSlide1: '../img/img-header.png',
    buttonSlide2: '../img/img-header-2.jpg',
    buttonSlide3: '../img/img-header-3.png'
}

const radioButtons = document.querySelectorAll('input[name="slide"]');
let slideInterval;

function nextSlide() {
    const current = document.querySelector('input[name="slide"]:checked');
    const index = Array.from(radioButtons).findIndex(radio => radio === current);
    const nextIndex = (index + 1) % radioButtons.length;
    radioButtons[nextIndex].checked = true;

    headerBlock.style.backgroundImage = `url(${backgrounds[radioButtons[nextIndex].id]})`;
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 10000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        headerBlock.style.backgroundImage = `url(${backgrounds[radio.id]})`;
        stopSlideShow();
        startSlideShow();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const checked = document.querySelector('input[name="slide"]:checked');
    if (checked) {
        headerBlock.style.backgroundImage = `url(${backgrounds[checked.id]})`;
    }else {
        radioButtons[0].checked = true,
        headerBlock.style.backgroundImage = `url(${backgrounds[radioButtons[0].id]})`;
    }
    startSlideShow();
});