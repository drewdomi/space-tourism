import navBar from "./navBar.js"
navBar()

function getJSON(path) {
  return fetch(path).then((response) => response.json())
}
getJSON('/src/data.json').then((data) => {
  const crew = data.crew[0].name
  console.log(crew)
})

const name = document.querySelector('#name')
const role = document.querySelector('#role')
const bio = document.querySelector('#bio')
const crewPhoto = document.querySelector('#crew-photo')

console.log(crewPhoto)
// function nextCrew() {}

// function prevCrew() {}
