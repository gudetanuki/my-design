'use strict';

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.getElementById('slides');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;



  function updateButtons() {

    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    
    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });

      dots.push(button);
      document.getElementById('btnav').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();


  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });


    const detail = document.getElementById('detail');
    const colors = document.getElementById('all-colors');
    const component = document.getElementById('all-component');
  
    function callback(entries, obs) {
      console.log(entries[0]);
  
      if (!entries[0].isIntersecting) {
        return;
      }
      entries[0].detail.classList.add('up');
      entries[0].colors.classList.add('up');
      entries[0].component.classList.add('up');
      obs.unobserve(entries[0].detail);
      obs.unobserve(entries[0].colors);
      obs.unobserve(entries[0].component);
  
  
  
      // if (entries[0].isIntersecting) {
      //   entries[0].target.classList.add('appear');
      // } else {
      //   entries[0].target.classList.remove('appear');
      // }
    }
  
    const options = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px',
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    observer.observe(detail);
    observer.observe(colors);
    observer.observe(component);

 
}