'use strict';
{
  const slide_src = ["img/top_slide_1.jpg", "img/top_slide_2.jpg", "img/top_slide_3.jpg"];

  let num = -1;

  function slideShow_timer() {
    if (num === 2) {
      num = 0;
    } else {
      num++;
    }
    document.getElementById("slide").src = slide_src[num];
  }

  setInterval(slideShow_timer, 3000);

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
}