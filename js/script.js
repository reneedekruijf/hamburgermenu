const menu = document.querySelector('nav');
const button = document.querySelector('button');
const links = menu.querySelectorAll('a');

if (localStorage.length === 0) menu.classList.add('hideMenu');
if (localStorage.getItem('menu') === 'open') button.classList.toggle('change');

links.forEach(link => {
  link.setAttribute('tabindex', '-1');
})

const menuHandler = () => {
  const storageLocal = localStorage.getItem('menu');

  if (storageLocal === 'close' || storageLocal === null) {
    menu.classList.remove('hideMenu');
    button.classList.add('change');
    localStorage.setItem('menu', 'open')
  }
  if (storageLocal === 'open') {
    menu.classList.add('hideMenu');
    button.classList.remove('change');
    localStorage.setItem('menu', 'close')
  }

  // menu.classList ? menu.classList.toggle('hideMenu') : ''
  // button.classList ? button.classList.toggle('change') : ''

  links.forEach(link => {
    link.hasAttribute('tabindex') ?
      link.removeAttribute('tabindex') : link.setAttribute('tabindex', '-1')
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