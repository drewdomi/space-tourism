import navBar from "./navBar.js"
navBar()

function getJSON(path) {
  return fetch(path).then((response) => response.json())
}

let tech = ''
getJSON('/src/data.json').then((data) => {
  tech = data.technology
})

const bulletNav = document.querySelectorAll('.bullet-nav *')
const title = document.querySelector('.main-title')
const img = document.querySelector('#tech-img')
const paragr = document.querySelector('.paragraph')

function removeSelectClass(bullet){
	bulletNav.forEach((bullet) => {
  	bullet.classList.remove('select-bullet')
	})
}
function changeContent(id) {
	title.innerText = tech[id].name
	paragr.innerText = tech[id].description
	img.style.backgroundImage = `url(${tech[id].images.landscape})`
	if(window.innerWidth >= 900 ){
		img.style.backgroundImage = `url(${tech[id].images.portrait})`
	}
}
bulletNav.forEach((bulletNav) => {
	bulletNav.addEventListener('pointerdown', () => {removeSelectClass(bulletNav)
		bulletNav.classList.toggle('select-bullet')
		changeContent(bulletNav.id)
	})
})