const request = require('request')

const url = 'https://api.darksky.net/forecast/f3b50a8351f213c744a3539d18d5ab3a/37.8267,-122.4233&units=si'

request({ url, json: true }, (error, response) => {
  if (response && response.body && response.body.currently) {
    const { currently } = response.body

    console.log(`It is currently ${currently.temperature} degrees out. There is ${currently.precipProbability}% chance of rain.`)
  }
})