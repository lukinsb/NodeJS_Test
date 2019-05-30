const request = require('request')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

geocode(process.argv[2], (error, data) => {

    weather(data.latitude, data.longitude, data.city, (error, data) => {
        if (error) {
            console.log('Error - ', error)
        } else {
            console.log(data)
        }
    })
})