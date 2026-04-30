$(".slick-end").slick({
  lazyLoad: "ondemand",
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});



// Funcionalidade de seleção de cores
$(document).ready(function() {
  // Seleciona todos os elementos de seleção de cor
  const colorTabs = document.querySelectorAll('.icon_box .flex-item');
  const colorSlider = $('.slick-end');
  
  // Adiciona event listener para cada tab de cor
  colorTabs.forEach((tab, index) => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove a classe e atributos do tab anterior
      document.querySelectorAll('.icon_box .flex-item').forEach(item => {
        item.classList.remove('text_active');
        item.setAttribute('aria-selected', 'false');
        item.setAttribute('tabindex', '-1');
      });
      
      // Adiciona a classe e atributos ao tab clicado
      this.classList.add('text_active');
      this.setAttribute('aria-selected', 'true');
      this.setAttribute('tabindex', '0');
      
      // Atualiza aria-hidden dos slides
      document.querySelectorAll('.slick-slide').forEach((slide, slideIndex) => {
        if (slideIndex === index) {
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.setAttribute('aria-hidden', 'true');
        }
      });
      
      // Move o carrossel para o slide correspondente
      if (colorSlider && colorSlider.length) {
        colorSlider.slick('slickGoTo', index);
      }
    });
  });
  
  // Sincroniza cores quando o slide muda (inclusive com autoplay)
  colorSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    // Atualiza a cor selecionada quando o slide muda
    const colorTabs = document.querySelectorAll('.icon_box .flex-item');
    
    colorTabs.forEach((tab, index) => {
      if (index === nextSlide) {
        tab.classList.add('text_active');
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');
      } else {
        tab.classList.remove('text_active');
        tab.setAttribute('aria-selected', 'false');
        tab.setAttribute('tabindex', '-1');
      }
    });
  });
});
