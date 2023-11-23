import { initBurger } from "./burger.js";
import { initAccordions } from "./accordion.js";

document.addEventListener("DOMContentLoaded", function () {


    initBurger();
    initAccordions();

    const screenSize = document.getElementById("screen-size");

    // Get screen size on page load
    screensize(window.innerWidth);

    // Get screen size on windows size change
    window.addEventListener("resize", function () {
        screensize(window.innerWidth);
    });

    // Function to get screen size on windows size change
    function screensize(size) {
        screenSize.innerHTML = size + "px";
    }

    const slider = document.querySelectorAll('.mySlider');

    if (slider.length > 0) {
        slider.forEach(function (slider) {
            const btn = slider.parentElement.querySelector('.slider__button');
            const showAll = slider.parentElement.querySelector('.show-all');
            const label = btn.querySelector('.slider__label');
            const slides = slider.querySelectorAll('.slider__slide');
            const totalSlides = slides.length;
            const blure = slides[0].querySelector('.blure-slide');
            const slideWidth = slides[0].offsetWidth;
            let sliderWidth = slider.offsetWidth;

            let sliderPerPage = 1;

            if (blure) {
                slides[0].querySelector('.blure-slide').classList.add('hidden');
            }

            if (window.innerWidth >= 768 && totalSlides > 2) {
                sliderPerPage = 2;
                if (totalSlides % 2 !== 0) {
                    sliderWidth = sliderWidth / 2;
                }
                if (blure) {
                    slides[1].querySelector('.blure-slide').classList.add('hidden');

                }

            }

            let currentSlide = sliderPerPage;
            label.textContent = `${currentSlide} / ${totalSlides}`;

            btn.addEventListener('click', function () {
                currentSlide = currentSlide < totalSlides ? currentSlide + sliderPerPage : sliderPerPage;
                if (blure) {
                    // blure all
                    slides.forEach(function (slide) {
                        slide.querySelector('.blure-slide').classList.remove('hidden');
                    });
                    slides[currentSlide - 1].querySelector('.blure-slide').classList.add('hidden');
                    if (sliderPerPage === 2) {
                        slides[currentSlide - 2].querySelector('.blure-slide').classList.add('hidden');

                    }
                }
                const scrollTo = (currentSlide - sliderPerPage) * slideWidth + 20;
                slider.scroll({
                    left: scrollTo,
                    behavior: 'smooth'
                });

                if (currentSlide > totalSlides) {
                    currentSlide = currentSlide - 1;
                }

                label.innerHTML = currentSlide + ' / ' + totalSlides;
            });

            if (showAll) {
                showAll.addEventListener('click', function () {
                    slides.forEach(function (slide) {
                        slide.style.display = 'flex';
                        showAll.style.display = 'none';
                    });
                });
            }
        });
    }

    // Scroll to top
    const scrollBtn = document.getElementById('scroll-top');

    if (scrollBtn) {
        scrollBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});


