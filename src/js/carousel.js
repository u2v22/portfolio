export function autoStart() {

  const slides = document.querySelectorAll('.slide');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const auto = true;
  const intervalTime = 3000;
  let slideInterval;

  if(slides){
    console.log('has slides');

    const nextSlide = () => {
      const current = document.querySelector('.current');
      // current.classList.remove('current');

      if(current.nextElementSibling && current.nextElementSibling.nodeName != "BUTTON") {
        current.nextElementSibling.classList.add('current');
      } else {
        slides[0].classList.add('current');
      }
      setTimeout(() => current.classList.remove('current'));
    }

    const prevSlide = () => {
      const current = document.querySelector('.current');
      current.classList.remove('current');

      if(current.previousElementSibling && current.previousElementSibling.nodeName != "BUTTON") {
        current.previousElementSibling.classList.add('current');
      } else {
        slides[slides.length - 1].classList.add('current');
      }
      setTimeout(() => current.classList.remove('current'));
    }

    prev.addEventListener('click', event => {
      prevSlide();
      if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(prevSlide, intervalTime);
      }
    });

    next.addEventListener('click', event => {
      nextSlide();
      if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    });

    if(auto) {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }
}
