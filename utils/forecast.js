const request = require('request')

const forecast = (address, callback) => {
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=5f6e69ba2706424fa8470548222512&q='+address+'&days=7';
    console.log(url)
    console.log('im inside')
    request({url, json: true}, (error, response)=>{
        if (error) {
            callback('Unable to connect to location services!',
            undefined)
            
        } 
        else if (response.body.length === 0){
            callback('Unable to find location. Try another search.',
            undefined)
            
        }
        else{
            console.log(response.body)
           
            // callback(undefined, 
            //     `latitude: ${response.body.location.lat} longitude: ${response.body.location.lon}`
                
                
            // )
        }
        
    })
    

}

module.exports = forecast()
//const geocodeurl = 'https://api.weatherapi.com/v1/current.json?key=5f6e69ba2706424fa8470548222512&q=boston'


    