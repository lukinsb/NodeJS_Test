const request = require('request')


const geocode = (address, callback) => {
    const url_map = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibHVjYXNiYWlhbyIsImEiOiJjanc5cWRydG4wMDNzNDhuMjB1NnYxcnY3In0.POE5CZ-9eWq5jxEhC30yNQ"
    request ({ url:url_map, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to maps service!', undefined)
        } else if (response.body.message) {
            callback(response.body.message)            
        } else if (response.body.features.length === 0) {
            callback('City not Found!', undefined)
        } else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                city: response.body.features[0].place_name
            })
        }
    })
}

module.exports  = geocode