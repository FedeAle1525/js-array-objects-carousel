// 1. Creo un Array di immagini
const slides = [
  
  {
    image: "./img/01.jpg",
    title: 'Lago di Como',
    text: 'Il luogo ideale se adori pescare'
  },

  {
    image: "./img/02.jpg",
    title: `Lago d'Iseo`,
    text: 'Il luogo ideale per chi ama la natura'
  },

  {
    image: "./img/03.jpg",
    title: `Londra`,
    text: 'Fatti amaliare dal fascino inglese'
  },

  {
    image: "./img/04.jpg",
    title: `Parigi`,
    text: 'Ideale per una vacanza romantica'
  },

  {
    image: "./img/05.jpg",
    title: `Caraibi`,
    text: 'Un luogo paradisiaco che non vorrai lasciare'
  }

];

console.log(slides);

// 2. Recuperiamo l'elemento "carosello" 
const carosello = document.getElementById('carousel');

// 3. Creo Markup HTML utilizzando Ciclo For
for (let i = 0; i < slides.length; i++){
  // const srcImg = slides[i].image;
  // const titleImg = slides[i].title;
  // const textImg = slides[i].text;

  const slideEl = document.createElement('div');
  slideEl.classList.add('slide');

  const htmlSlide = 
  `<img src=${slides[i].image} alt="">
  <div class="slide-text">
    <h4>${slides[i].title}</h4>
    <p>${slides[i].text}</p>
  </div>`;

  slideEl.innerHTML = htmlSlide;

  console.log("Slide: ", htmlSlide);

  carosello.append(slideEl);
}

// 4. Prendo tutti gli elementi con classe "slide" da Html
const slideElements = document.getElementsByClassName('slide');
console.log(slideElements);

// 5. Serve un indice di riferimento per tenere traccia della Slide Attiva
let indexCurrentSlide = 0;
// 5.1 - Assegno alla Prima Slide la classe "active" come purto di partenza
slideElements[indexCurrentSlide].classList.add('active');

// 6. Recupero i gli elementi "pulsanti freccia"
const leftBtnArrow = document.getElementById('arrow-left');
const rightBtnArrow = document.getElementById('arrow-right');
console.log(leftBtnArrow,rightBtnArrow);

// 7. Creo evento sul "pulsante freccia destro": scorrere le immagini al "click"
rightBtnArrow.addEventListener('click', function(){

  // 7.2 - Recupero Slide Corrente e tolgo la classe "active"
  let currentSlide = slideElements[indexCurrentSlide];
  currentSlide.classList.remove('active');
  console.log("Slide Attiva: " + indexCurrentSlide);

  // 7.3 - Incremento Indice per trovare Slide Successiva e controllo per creare "Ciclo Infinito"
  if (indexCurrentSlide < slideElements.length - 1){
    indexCurrentSlide = indexCurrentSlide + 1;
  } else {
    indexCurrentSlide = 0;
  }
    
  // 7.4 - Recupero Slide Successiva e aggiungo la classe "active"
  let nextSlide = slideElements[indexCurrentSlide];
  nextSlide.classList.add('active');
  console.log("Slide Successiva: " + indexCurrentSlide);

});

// 9. Creo evento sul "pulsante freccia sinistro": scorrere le immagini al click
leftBtnArrow.addEventListener('click', function(){

  // 9.2 - Recupero Slide Corrente e tolgo la classe "active"
  let currentSlide = slideElements[indexCurrentSlide];
  currentSlide.classList.remove('active');
  console.log("Slide Attiva: " + indexCurrentSlide);

  // 9.3 - Decremento Indice per trovare Slide Precedente e controllo per creare Ciclo Infinito
  if (indexCurrentSlide > 0) {
    indexCurrentSlide = indexCurrentSlide - 1;
  } else {
    indexCurrentSlide = slideElements.length - 1;
  } 

  // 9.4 - Recupero Slide Precedente e aggiungo la classe "active"
  prevSlide = slideElements[indexCurrentSlide];
  prevSlide.classList.add('active');
  console.log("Slide Precedente: " + indexCurrentSlide);

});

