const carouselImgs = document.querySelectorAll('.carousel-img');
    const carouselCaptions = document.querySelector('.carousel-caption p');
    let currentSlide = 0;

    function showSlide() {
      carouselImgs.forEach(img => img.classList.remove('active'));
      carouselImgs[currentSlide].classList.add('active');
    }

    function showCaption() {
      const captions = ["Dummy Text 1", "Dummy Text 2", "Dummy Text 3"];
      carouselCaptions.textContent = captions[currentSlide];
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % 3;
      showSlide();
      showCaption();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + 3) % 3;
      showSlide();
      showCaption();
}