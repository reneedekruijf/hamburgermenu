//! menu moet openblijven als er geklikt is ook als er naar een andere pagina wordt gegaan


const menu = document.querySelector('nav');
const button = document.querySelector('button');
const links = menu.querySelectorAll('a');

menu.classList.add('hideMenu');

links.forEach(link => {
  link.setAttribute('tabindex', '-1');
})

const menuHandler = () => {
  menu.classList ? menu.classList.toggle('hideMenu') : ''
  menu.classList ? button.classList.toggle('change') : ''

  links.forEach(link => {
    link.hasAttribute('tabindex') ? link.removeAttribute('tabindex') : link.setAttribute('tabindex', '-1')
  })
}

if (window.innerWidth >= 600) {
  button.classList.add('buttonHidden');
  menuHandler();
}

button.addEventListener('click', menuHandler);
window.addEventListener('resize', () => {
  window.innerWidth >= 600 ? button.classList.add('buttonHidden') : button.classList.remove('buttonHidden')
  if (window.innerWidth >= 600 && menu.classList.contains('hideMenu')) menuHandler();
})