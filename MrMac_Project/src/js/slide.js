window.onload = function (){
    let current = 0;
    const slides = document.querySelectorAll('#slides .slide');
    const total = slides.length;

    setInterval(() => {
      slides[current].classList.remove('opacity-100');
      slides[current].classList.add('opacity-0');
      current = (current + 1) % total;
      slides[current].classList.remove('opacity-0');
      slides[current].classList.add('opacity-100');
    }, 5000); // 5 seconds
  };