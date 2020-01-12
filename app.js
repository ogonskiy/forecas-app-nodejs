const { geocode } = require('./utils/geocode')

// const URL = 'https://api.darksky.net/forecast/f3b50a8351f213c744a3539d18d5ab3a/37.8267,-122.4233'
// const GEO_CODE_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWxleDIyNSIsImEiOiJjazViYWk5ZGMwYXBiM25vNW5kcTRmazc3In0.SFXh7I-BkhEQ2MMOm4TJNw'

// request({ url: URL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Error. Unable to connect to server.')
//   } else if (response.body.error) {
//     console.log(response.body.error)
//   } else {
//     if (response && response.body && response.body.currently) {
//       const { currently } = response.body
  
//       console.log(`It is currently ${currently.temperature} degrees out. There is ${currently.precipProbability}% chance of rain.`)
//     }
//   }
// })

// request({ url: GEO_CODE_URL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Error. Unable to connect to server.')
//   } else if (!response.body.features.length) {
//     console.log('Nothing found')
//   } else {
//     const { center } = response.body.features[0]
//     const latitude = center[1]
//     const longitude = center[0]
//     console.log(`latitide: ${latitude}, longitide: ${longitude}`)
//   }
// })

geocode('Boston', (error, data) => {
  console.log(`error: ${error}`)
  console.log(`data: ${data}`)
})