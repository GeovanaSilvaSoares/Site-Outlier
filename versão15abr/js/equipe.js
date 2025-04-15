// Modo claro/escuro
const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark')
})

///////////////////////////////////////////////////////////////
// Carrossel de apresentação da equipe 
let slideIndex = 1;
showSlides(slideIndex);

// Controles de próximo e anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("org5"); 
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  
  if (dots.length > 0) {
    dots[slideIndex - 1].className += " active";
  }
}
