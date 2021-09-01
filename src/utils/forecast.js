const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b7001c2fbaeeae7cfc18dda2e50f5fef&query=' + longitude +','+latitude

    console.log(url)
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature 
                + ' degress out. But it feels like ' + body.current.feelslike + ' degress out.'
            )
        }
    })
}

module.exports = forecast