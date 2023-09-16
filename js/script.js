//Burger

const burger = document?.querySelector('.burger');
const nav = document?.querySelector('.nav');
const navItems = nav?.querySelectorAll('.nav__item');
const body = document.body;
const header = document?.querySelector('.header');



burger?.addEventListener('click', () => {
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {

    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
  })
})
