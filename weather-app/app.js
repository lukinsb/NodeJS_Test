const request = require('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const location = process.argv[2]

if (!location) {
    console.log(chalk.bgRed('Please provide the location for your consult'))
} else {

    geocode(location, (error, response) => {
        if (error) {
            console.log('Error - ', error)
        } else {
            weather(response.latitude, response.longitude, response.city, (error, data) => {
                if (error) {
                    console.log('Error - ', error)
                } else {
                    console.log(data)
                }

            })
        }
    })
}