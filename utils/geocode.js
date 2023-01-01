const request = require('request')

const geocode = (address, callback) =>{
    const url = 'https://api.weatherapi.com/v1/current.json?key=5f6e69ba2706424fa8470548222512&q='+address
    
    request({url, json: true}, (error, response)=>{
        if (error) {
            callback('Unable to connect to location services!',
            undefined)
        } 
        // else if (response.location.length === 0){
        //     callback('Unable to find location. Try another search.',
        //     undefined)
        // }
        else{
            console.log(url)
            callback(undefined, {
                latitude: response.body.location.lat,
                longtitude: response.body.location.lon
                
            })
        }
        
    })
    

}

module.exports = geocode
//const geocodeurl = 'https://api.weatherapi.com/v1/current.json?key=5f6e69ba2706424fa8470548222512&q=boston'


