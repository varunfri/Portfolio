document.addEventListener("DOMContentLoaded", () => {
    const carouselInner = document.querySelector(".carousel-inner");
    const images = document.querySelectorAll(".carousel-inner img");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    
    let currentIndex = 0;

    const updateCarousel = () => {
        const width = images[0].clientWidth;
        carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
    };

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel); // Adjust for screen resizing
});
