const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]




// === SÉLECTION DES FLÈCHES ===

// Sélectionne la flèche gauche
const arrowleft = document.querySelector('.arrow_left');

// Sélectionne la flèche droite
const arrowright = document.querySelector('.arrow_right');

// === SÉLECTION DES ÉLÉMENTS DU SLIDER ===

// Sélectionne l’image dans le slider
const imageElement = document.querySelector('.banner-img');

// Sélectionne le texte affiché dans le slider
const texteElement = document.querySelector('.banner-text');

// Sélectionne la div qui contient les "dots"
const dotsdiv = document.querySelector('.dots');

// === CRÉATION DES DOTS ===

// Boucle sur tous les slides pour créer un dot pour chacun
for (let i = 0; i < slides.length; i++) {
  // Crée une div pour le dot
  const dot = document.createElement('div');
  dot.classList.add('dot'); // Ajoute la classe CSS

  // Si c'est le premier dot, on lui ajoute la classe 'dot_selected'
  if (i === 0) {
    dot.classList.add('dot_selected');
  }

  // Ajoute le dot dans la div "dots"
  dotsdiv.appendChild(dot);
}

// === VARIABLE POUR SUIVRE LE SLIDE ACTUEL ===
let currentslide = 0;

// === GESTION DE LA FLÈCHE DROITE ===

arrowright.addEventListener('click', function () {
  // Incrémente le slide actuel
  currentslide++;

  // Si on dépasse le dernier slide, on revient au premier
  if (currentslide >= slides.length) {
    currentslide = 0;
  }

  // Met à jour l'image et le texte
  const image = slides[currentslide].image;
  const text = slides[currentslide].tagLine;

  imageElement.src = './assets/images/slideshow/' + image;
  texteElement.innerHTML = text;

  // Met à jour les dots
  const toutLesDot = document.querySelectorAll('.dot');
  document.querySelector('.dot_selected').classList.remove('dot_selected');
  toutLesDot[currentslide].classList.add('dot_selected');
});

// === GESTION DE LA FLÈCHE GAUCHE ===

arrowleft.addEventListener('click', function () {
  // Décrémente le slide actuel
  currentslide--;

  // Si on est avant le premier slide, on va au dernier
  if (currentslide < 0) {
    currentslide = slides.length - 1;
  }

  // Met à jour l'image et le texte
  const image = slides[currentslide].image;
  const text = slides[currentslide].tagLine;

  imageElement.src = './assets/images/slideshow/' + image;
  texteElement.innerHTML = text;

  // Met à jour les dots
  const toutLesDot = document.querySelectorAll('.dot');
  document.querySelector('.dot_selected').classList.remove('dot_selected');
  toutLesDot[currentslide].classList.add('dot_selected');
});


















