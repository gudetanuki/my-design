'use strict';
{
  const message = document.getElementById('message');

  function callback(entries, obs) {
    console.log(entries[0]);

    // if (!entries[0].isIntersecting) {
    //   return;
    // }
    if (entries[0].isIntersecting) {
      entries[0].message.classList.add('up');
    } else {
      entries[0].message.classList.remove('up');
    }
    // entries[0].message.classList.add('up');
    // obs.unobserve(entries[0].message);
  }

  const options = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px',
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(message);

}
