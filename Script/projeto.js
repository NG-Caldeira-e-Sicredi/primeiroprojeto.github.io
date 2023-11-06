// Função para abrir e fechar TODOS os modais (1 ao 15)
document.addEventListener('DOMContentLoaded', function () {
  const openModalButtons = document.querySelectorAll('.open-modal');
  const closeButtons = document.querySelectorAll('.close-modal');
  const modals = document.querySelectorAll('.modal');

  openModalButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          modals[index].style.display = 'block';
      });
  });

  closeButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          modals[index].style.display = 'none';
      });
  });

  window.addEventListener('click', (event) => {
      modals.forEach((modal) => {
          if (event.target === modal) {
              modal.style.display = 'none';
          }
      });
  });
});


// Botão de Dark ou Light
function darkOrLight() {
  const body = document.body;
  body.classList.toggle("dark");

}

// Botão de slider de depoimentos 
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
     slidesPerView: 3,
     spaceBetween: 45,
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
  });
 });

// aqui inicia teste apresentação
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Troca a imagem a cada 2seg
}
// aqui termina teste apresentação