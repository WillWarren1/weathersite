// let currentWeather = {}

const getWeather = () => {
  let currentWeather = {}
  let findCity = document.querySelector('.location').value
  console.log(findCity)
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${findCity}&appid=ff684675032bb7d3fa1c601417c8df7a&units=imperial`
  console.log(url)
  let zipurl = `https://api.openweathermap.org/data/2.5/weather?zip=${findCity}&appid=ff684675032bb7d3fa1c601417c8df7a&units=imperial`

  if (isNaN(findCity)) {
    fetch(url)
      .then(resp => {
        return resp.json()
      })
      .then(cityWeather => {
        console.log(cityWeather)
        // currentWeather = cityWeather
        // console.log(currentWeather)
        console.log(cityWeather.weather[0].description)
        const _article = document.createElement('article')
        _article.textContent = cityWeather.weather[0].description
        document.querySelector('.weather').appendChild(_article)
      })
  } else {
    fetch(zipurl)
      .then(resp => {
        return resp.json()
      })
      .then(cityWeather => {
        console.log(cityWeather)
        // currentWeather = cityWeather
        // console.log(currentWeather)
        console.log(cityWeather.weather[0].description)
        const _article = document.createElement('article')
        _article.textContent = cityWeather.weather[0].description
        document.querySelector('.weather').appendChild(_article)
      })
  }
}

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent =
      'get your weather here'
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.search').addEventListener('click', getWeather)
