const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

document.addEventListener('DOMContentLoaded', () =>
  wait(2000).then(() => {
    // Copyright purposes
    const footerDate = document.getElementsByClassName("footer__year");
    if (footerDate) {
      footerDate[0].innerHTML = new Date().getFullYear();
    }
  }));

  let scrollpos = window.scrollY;
  const imgs = document.querySelectorAll(".simg");

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    imgs.forEach(i => {
      if (scrollpos >= 350) {
        i.classList.remove('fade-out');
        i.classList.add('fade-in');
      } else {
        i.classList.remove('fade-in');
        i.classList.add('fade-out');
      }
    });
  })
