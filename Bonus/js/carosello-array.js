// 1. Creo un Array di Oggetti che rappresentano le Slide
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
// for (let i = 0; i < slides.length; i++){
//   // const srcImg = slides[i].image;
//   // const titleImg = slides[i].title;
//   // const textImg = slides[i].text;
// DESTRUTTURAZIONE: {secImage, titleImg, textImg} = slide;

//   const slideEl = document.createElement('div');
//   slideEl.classList.add('slide');

//   const htmlSlide = 
//   `<img src=${slides[i].image} alt="">
//   <div class="slide-text">
//     <h4>${slides[i].title}</h4>
//     <p>${slides[i].text}</p>
//   </div>`;

//   slideEl.innerHTML = htmlSlide;

//   console.log("Slide: ", htmlSlide);

//   carosello.append(slideEl);
// }

// 3. Creo Markup HTML utilizzando Ciclo ForEach
// La Destrutturazione può essere applicata direttamente come Parametro del Ciclo ForEach --> 
// --> slides.forEach(({secImage, titleImg, textImg}) => ... ), si perde però l'opportunita di accedere all'elemento completo.

slides.forEach((slide) => {

  const slideEl = document.createElement('div');
  slideEl.classList.add('slide');

  const htmlSlide = `
    <img src=${slide.image} alt="">
    <div class="slide-text">
      <h4>${slide.title}</h4>
      <p>${slide.text}</p>
    </div>
  `;

  slideEl.innerHTML = htmlSlide;

  console.log("Slide: ", htmlSlide);

  carosello.append(slideEl);

})

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

// 7. Creo evento sul "pulsante freccia destro" con Funzione: scorrere le immagini al "click"
rightBtnArrow.addEventListener('click', nextSlide);

// 9. Creo evento sul "pulsante freccia sinistro" con Funzione: scorrere le immagini al click
leftBtnArrow.addEventListener('click', previousSlide);

// BONUS 3 - Autoplay

// Recupero Elementi Pulsanti dal DOM
const btnPlay = document.querySelector('.btn-success');
const btnStop = document.querySelector('.btn-danger');
const btnRotate = document.querySelector('.btn-warning');
let clock;

// Creo evento "click" su pulsante Play che avvia AutoPlay
btnPlay.addEventListener("click", function(){

  // Funzionalita' AutoPlay che passa alla slide successiva ogni 3 secondi
  clock = setInterval(nextSlide,3000);

});
// Altra funzionalità: l'Autoplay si parte quando l'Utente esce con il mouse fuori lo sider
// carosello.addEventListener("mouseleave", function(){
//   clock = setInterval(nextSlide,3000);
// })

// Creo evento "click" su pulsante Stop che avvia AutoPlay
btnStop.addEventListener("click", function(){

  // Interrompo il 'setInterval' per fermare Autoplay
  clearInterval(clock);

});
// Altra funzionalità: l'Autoplay si ferma quando l'Utente entra con il mouse dentro lo sider
// carosello.addEventListener("mouseenter", function(){
//   clearInterval(clock);
// });

// Creo evento "click" su pulsante Rotate che inverte lo scorrimento dell'AutoPlay
btnRotate.addEventListener("click", function(){

  // Funzionalita' AutoPlay che passa alla slide precedente ogni 3 secondi
  clock = setInterval(previousSlide,3000);
});


// ***************************
// Funzione "nextSlide"
// ***************************

function nextSlide(){

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
}

// ***************************
// Funzione "previousSlide"
// ***************************

function previousSlide(){

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
}

