document.addEventListener("DOMContentLoaded", () => {

    function createSlider(containerSelector, prevSelector, nextSelector) {
        const slider = document.querySelector(`${containerSelector} .slider-container`);
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = document.querySelector(prevSelector);
        const nextBtn = document.querySelector(nextSelector);

        let currentSlide = 0;
        const totalSlides = slides.length;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        });

        // Inicializar slider
        updateSlider();
    }

    // Crea sliders individuales
    createSlider('#nosotros-section', '.prev', '.next'); // Slider de “quienes somos”
    createSlider('#productos-section', '.productos-prev', '.productos-next'); // Slider de productos

});
