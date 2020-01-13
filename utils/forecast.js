const request = require('request')

const getUrl = (lat, lon) => `https://api.darksky.net/forecast/f3b50a8351f213c744a3539d18d5ab3a/${lat},${lon}`

const forecast = (lat, lon, callback) => {
  const url = getUrl(lat, lon)

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Error. Unable to connect to server.', undefined)
    } else if (body.error) {
      callback(body.error, undefined)
    } else if (body && body.currently) {
      const { currently } = body
    
      callback(undefined, `It is currently ${currently.temperature} degrees out. There is ${currently.precipProbability}% chance of rain.`)
    } else {
      callback('Something went wrong', undefined)
    }
  })
}

module.exports = { forecast }
