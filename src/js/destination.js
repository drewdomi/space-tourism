import navBar from "./navBar.js"
navBar()

function getJSON(path) {
  return fetch(path).then((response) => response.json())
}

let destinations = ''
getJSON('/src/data.json').then((data) => {
  destinations = data.destinations
})

const tabMenu = document.querySelectorAll('.tab-menu *')
const planetPhoto = document.querySelector('#planet-photo')
const name = document.querySelector('#title')
const description = document.querySelector('#paragraph')
const distance = document.querySelector('#distance')
const travel = document.querySelector('#travel')

function changeDestination(id){
  planetPhoto.src = destinations[id].images.png
  name.innerText = destinations[id].name
  description.innerText = destinations[id].description
  distance.innerText = destinations[id].distance
  travel.innerText = destinations[id].travel
  
}
function removeSelectTabClass(){
tabMenu.forEach((tabItem) => {
  tabItem.classList.remove('tab-item-select')
})
}

tabMenu.forEach((tabItem) => {
  tabItem.addEventListener('pointerdown', () => {
    removeSelectTabClass()
    tabItem.classList.toggle('tab-item-select')
    changeDestination(tabItem.id)
  })
})





