let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a'); // pega todos os links do menu

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*========== Fechar menu ao clicar num link (mobile) ==========*/
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Só fecha se o menu estiver ativo (mobile)
    if (window.innerWidth <= 768) {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    }
  });
});

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  /*========== sticky navbar ==========*/
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);
};
