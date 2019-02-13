// let currentWeather = {}

const getWeather = () => {
  let currentWeather = {}
  let findCity = document.querySelector('.location').value
  let parameter = 'zip'
  console.log(findCity)
  // let url = `https://api.openweathermap.org/data/2.5/weather?q=${findCity}&appid=ff684675032bb7d3fa1c601417c8df7a&units=imperial`
  // console.log(url)

  if (isNaN(findCity)) {
    parameter = 'q'
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?${parameter}=${findCity}&appid=ff684675032bb7d3fa1c601417c8df7a&units=imperial`
  fetch(url)
    .then(resp => {
      return resp.json()
    })
    .then(cityWeather => {
      console.log(cityWeather)
      // currentWeather = cityWeather
      // console.log(currentWeather)
      console.log(cityWeather.weather[0].description)
      // theres 100% a better way to do what comes next
      //but i am currently lacking the brain power to even attempt it
      const _h2 = document.createElement('h2')
      _h2.textContent = cityWeather.weather[0].description
      document.querySelector('.weather').appendChild(_h2)
      const _h3 = document.createElement('h3')
      _h3.textContent = cityWeather.main.temp
      document.querySelector('.weather').appendChild(_h3)
      const _h4 = document.createElement('h4')
      _h4.textContent = cityWeather.name
      document.querySelector('.weather').appendChild(_h4)
    })
}

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent =
      'get your weather here'
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.search').addEventListener('click', getWeather)
