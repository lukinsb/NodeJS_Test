const request = require('request')


const weather = (latitude, longitude, city, callback) => {

    const url = 'https://api.darksky.net/forecast/7fff670547681c9e8767ebc912b995de/' + latitude + ',' + longitude + '?lang=en&units=si'

    request({url, json: true}, (error, {body}) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.code) {
            callback(undefined, body.code +" - "+ body.error)
        } else {
            callback(undefined, 'In ' + city + ' it is currently ' + body.currently.summary + " and " + body.currently.temperature + ' degrees celsius out and there is a ' +
                body.currently.precipProbability * 100 + '% chance of rain.')
        }
    })
}

module.exports = weather