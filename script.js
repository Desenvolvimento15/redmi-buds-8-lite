$(".slick-track").slick({
  lazyLoad: "ondemand",
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});



document.addEventListener("DOMContentLoaded", () => {
  // --- ESCONDER TODOS OS MODAIS NA CARGA ---
  document.querySelectorAll(".modal1, .modal2").forEach((modal) => {
    modal.style.display = "none";
  });
  document.querySelectorAll("[class*='_ye']").forEach((modal) => {
    modal.classList.add("no_show"); // modais tipo embrace_slider
  });

  // --- LISTENER ÚNICO PARA TODOS OS CLIQUES ---
  document.addEventListener("click", (e) => {
    const target = e.target;

    // --- ABRIR modal embrace_slider ---
    if (target.matches(".embrace_slider img[role='button']")) {
      const slide = target.closest(".slick-slide");
      const modal = slide.querySelector("[class*='_ye']");
      if (modal) modal.classList.remove("no_show");
    }

    // --- FECHAR modal embrace_slider ---
    if (target.matches("[class*='_ye'] img[role='button']")) {
      const modal = target.closest("[class*='_ye']");
      if (modal) modal.classList.add("no_show");
    }

    // --- ABRIR modal1 ---
    if (target.closest(".div367[role='button']")) {
      const trigger = target.closest(".div367[role='button']");
      const modal = trigger.querySelector(".modal1");
      if (modal) modal.style.display = "flex";
    }

    // --- FECHAR modal1 ---
    if (target.matches(".modal1 .up1_close_pc img[role='button']")) {
      const modal = target.closest(".modal1");
      if (modal) modal.style.display = "none";
    }

    // --- ABRIR modal2 ---
    if (target.closest(".div7878_wrap[role='button']")) {
      const trigger = target.closest(".div7878_wrap[role='button']");
      const modal = document.querySelector(".modal2"); // assume apenas 1 modal2
      if (modal) modal.style.display = "flex";
    }

    // --- FECHAR modal2 ---
    if (target.matches(".modal2 .up2_close_pc img[role='button']")) {
      const modal = target.closest(".modal2");
      if (modal) modal.style.display = "none";
    }
  });

  // --- FECHAR modal1 e modal2 AO CLICAR FORA DO CONTEÚDO ---
  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal1, .modal2").forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
