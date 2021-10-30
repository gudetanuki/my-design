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
  
}