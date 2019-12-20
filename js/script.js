const navSlide = () => {
  const hamburger = document.querySelector('#hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelector('nav-links li');
  //Toggle nav
  hamburger.addEventListener('click',() => {
    nav.classList.toggle('nav-active');
  });
  //animate Links
  navLinks.forEach((link, index) => {
    link.style.animate = 'navLinkFade 0.5s ease forwards ${index /7}s';
    console.log(index / 7);
  });
}
