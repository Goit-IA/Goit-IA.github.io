document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".faq-slide");
  let currentIndex = 0;

  setInterval(() => {
      slides.forEach((slide, index) => {
          slide.style.transform = `translateY(-${currentIndex * 100}%)`;
      });

      currentIndex = (currentIndex + 1) % slides.length; // Ciclo infinito
  }, 6000); // Cambia cada 5 segundos
});
