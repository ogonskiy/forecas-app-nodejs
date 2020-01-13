const { geocode } = require('./utils/geocode')
const { forecast } = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
  console.log('Please provide an address')
} else {
  geocode(address, (error, center) => {
    if (error) {
      console.log(`Error: ${error}`)
      return
    }
    if (center) {
      forecast(...center, (error, forecastData) => {
        if (error) {
          console.log(`Error: ${error}`)
          return
        }
        console.log(`Data: ${forecastData}`)
      })
    }
  })
}
