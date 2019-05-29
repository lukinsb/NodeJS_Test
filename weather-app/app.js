const request = require('request')

const url = 'https://api.darksky.net/forecast/7fff670547681c9e8767ebc912b995de/-23.5702158,-46.6461033?lang=en&units=si'

request({url: url, json: true}, (error, response) => {


    console.log('It is currently '+ response.body.currently.summary + " and " + response.body.currently.temperature + ' degrees celsius out and there is a '
                 + response.body.currently.precipProbability *100 +'% chance of rain.')

})