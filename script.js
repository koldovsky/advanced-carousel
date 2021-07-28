(function() {

  const slides = [
    'https://placekitten.com/g/200/300',
    'https://placekitten.com/g/200/301',
    'https://placekitten.com/g/200/302',
    'https://placekitten.com/g/200/303',
    'https://placekitten.com/g/200/304',
    'https://placekitten.com/g/200/306'
  ];

  let firstSlide = 0;
  let slidesToShow = 4;

  function showCurrentSlide() {
    const slidesContainer = document.querySelector('.slides');
    let slideIdx = firstSlide;
    let html = '';
    for (let i = 1; i <= slidesToShow; i++) {
       html += `<img src="${slides[slideIdx]}" alt="Slide">`;
      slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    }
    slidesContainer.innerHTML = html;
  }

  function nextSlide() {
    firstSlide = firstSlide + 1 >= slides.length ? 0 : firstSlide + 1;
    showCurrentSlide();
  }


  setInterval(nextSlide, 2000);

  function resize() {
    console.log(window.screen.width);
    if (window.screen.width <= 400) {
      slidesToShow = 1;
    } else if (window.screen.width <= 600) {
      slidesToShow = 2;
    } else if (window.screen.width <= 900) {
      slidesToShow = 3;
    } else {
      slidesToShow = 4;
    }
    showCurrentSlide();
  }
 
  window.addEventListener('resize', resize);

})();