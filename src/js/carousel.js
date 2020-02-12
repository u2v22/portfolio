console.log('carousel');

const carousel = document.querySelectorAll('.carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const auto = false;
const intervalTime = 5000;
let carouselInterval;

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');

  if(current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    carousel[carousel.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');

  if(current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    carousel[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

prev.addEventListener('click', (event) => {
  prevSlide();
  console.log('running previous button');
})

next.addEventListener('click', (event) => {
  nextSlide();
  console.log('running next button');
})

module.exports = { nextSlide, prevSlide }
