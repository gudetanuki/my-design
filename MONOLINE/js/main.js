'use strict';
{
  //スライドショー で表示させる画像パスを変数に格納
const Images = [
  "../img/top_slide_1.jpg",
  "../img/top_slide_2.jpg",
  "../img/mua.jpg",
  ];

  const slideShow = document.getElementById('slideshow');

  let i = 0;

  function slideImage() {
    if (i === Images.length) {
      i = 0;
    };

    slideShow.style.backgroundImage = 'url(' + Images[i] + ')';
    i++;
  }

  window.setInterval(slideImage, 3000);

}
