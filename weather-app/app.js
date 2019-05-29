const request = require('request')

const url = 'https://api.darksky.net/forecast/7fff670547681c9e8767ebc912b995de/-23.5702158,-46.6461033'

request({
    url: url
}, (error, response) => {

    const data = JSON.parse(response.body)
    console.log(data)
})