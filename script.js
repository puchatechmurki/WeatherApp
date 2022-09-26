const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?lat='

const API_KEY = '&appid=e791d6c2cb9f09f00f34776a1f48c196'
const API_UNITS = '&units=metric'

const getWeather = () => {
    const city = input.value ||'London'
    const URL = API_LINK + city + API_KEY + API_UNITS
}

axios.get(URL).then(res => {
    console.log(res.data)
    const temp = res.data.main.temp
    const hum = res.data.main.humidity

    cityName.textContent = res.data.name

    temperature.textContent = Math.floor(temp) + 'C'
    humidity.textContent = hum + '%'
})

getWeather()





