import navBar from './navBar.js'
navBar()

function getJSON(path) {
  return fetch(path).then((response) => response.json())
}
let crew = ''
getJSON('/src/data.json').then((data) => {
  crew = data.crew
})

let currentCrew = 0
const slider = document.querySelectorAll('.slider *')
const name = document.querySelector('#name')
const role = document.querySelector('#role')
const bio = document.querySelector('#bio')
const crewPhoto = document.querySelector('#crew-photo')
const nextBtn = document.querySelector('#next-btn')
const prevBtn = document.querySelector('#prev-btn')

nextBtn.addEventListener('pointerdown', nextCrew)
prevBtn.addEventListener('pointerdown', prevCrew)

function removeSliderItemClass(){
  slider.forEach((sliderItem) => {
    sliderItem.classList.remove('select-slider')
  })
}
function addSliderItemClass(){
  slider[currentCrew].classList.add('select-slider')
}
function changeSliderItemClass(){
  removeSliderItemClass()
}
function nextCrew() {
  if(currentCrew === 3) return
  ++currentCrew
  crewPhoto.src = crew[currentCrew].images.png
  name.innerText = crew[currentCrew].name
  role.innerText = crew[currentCrew].role
  bio.innerText = crew[currentCrew].bio
  changeSliderItemClass()
  addSliderItemClass()
}
function prevCrew() {
  if(currentCrew === 0) return
  --currentCrew
  crewPhoto.src = crew[currentCrew].images.png
  name.innerText = crew[currentCrew].name
  role.innerText = crew[currentCrew].role
  bio.innerText = crew[currentCrew].bio
  changeSliderItemClass()
  addSliderItemClass()
}
