const request = require('request')


const weather = (latitude, longitude, city, callback) => {

    const url = 'https://api.darksky.net/forecast/7fff670547681c9e8767ebc912b995de/' + latitude + ',' + longitude + '?lang=en&units=si'

    request({url: url, json: true}, (error, response) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.code) {
            callback(undefined, response.body.code +" - "+ response.body.error)
        } else {
            callback(undefined, 'In ' + city + ' it is currently ' + response.body.currently.summary + " and " + response.body.currently.temperature + ' degrees celsius out and there is a ' +
                response.body.currently.precipProbability * 100 + '% chance of rain.')
        }
    })
}

module.exports = weather