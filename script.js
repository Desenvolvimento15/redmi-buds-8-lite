document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slick-slide");
  const dots = document.querySelectorAll(".icon_box .flex-item");
  const texts = document.querySelectorAll(".text_box .earphone_text");

  let currentIndex = 0;
  let autoplayTimer = null;
  const AUTOPLAY_DELAY = 5000; // 5 segundos

  function updateSlider(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.setAttribute("aria-hidden", "false");
        slide.style.display = "block";
      } else {
        slide.setAttribute("aria-hidden", "true");
        slide.style.display = "none";
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("text_active");
        dot.setAttribute("aria-selected", "true");
        dot.setAttribute("tabindex", "0");
      } else {
        dot.classList.remove("text_active");
        dot.setAttribute("aria-selected", "false");
        dot.setAttribute("tabindex", "-1");
      }
    });

    texts.forEach((text, i) => {
      if (i === index) {
        text.classList.add("text_active");
      } else {
        text.classList.remove("text_active");
      }
    });

    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    updateSlider(nextIndex);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  // Clique / interação nos dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoplay();
      updateSlider(index);
      startAutoplay();
    });

    dot.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        stopAutoplay();
        updateSlider(index);
        startAutoplay();
      }
    });
  });

  // Inicialização
  updateSlider(0);
  startAutoplay();
});
