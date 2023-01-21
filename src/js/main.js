function start() {
  const hamMenu = document.querySelector('#ham-menu')
  const hamMenuIconOpen = document.querySelector('#ham-menu-icon-open')
  const hamMenuIconClose = document.querySelector('#ham-menu-icon-close')
  const menu = document.querySelector('#menu')

  function hamMenuOpen() {
    menu.classList.remove('menu-close')
    menu.classList.add('menu-open')
    hamMenuIconOpen.classList.add('hide')
    hamMenuIconClose.classList.remove('hide')
  }
  function hamMenuClose() {
    hamMenuIconClose.classList.add('hide')
    hamMenuIconOpen.classList.remove('hide')
    menu.classList.remove('menu-open')
    menu.classList.add('menu-close')
  }
  hamMenuIconOpen.addEventListener('click', hamMenuOpen)
  hamMenuIconClose.addEventListener('click', hamMenuClose)
}

start()
