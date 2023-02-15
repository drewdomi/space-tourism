export default function navBar() {

  const hamMenuIconOpen = document.querySelector('#ham-menu-icon-open')
  const hamMenuIconClose = document.querySelector('#ham-menu-icon-close')
  const menu = document.querySelector('#menu')

  function hamMenuClose() {
    hamMenuIconClose.classList.add('hide')
    hamMenuIconOpen.classList.remove('hide')
    menu.classList.remove('menu-open')
    menu.classList.add('menu-close')
  }

  function hamMenuOpen() {
    menu.classList.remove('menu-close')
    menu.classList.add('menu-open')
    hamMenuIconOpen.classList.add('hide')
    hamMenuIconClose.classList.remove('hide')
  }

  hamMenuIconOpen.addEventListener('pointerdown', hamMenuOpen)
  hamMenuIconClose.addEventListener('pointerdown', hamMenuClose)
}


