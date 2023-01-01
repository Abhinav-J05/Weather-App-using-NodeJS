const { url } = require('inspector')
const path = require('path')
const request = require('request')
const express = require('express')
const hbs = require('hbs')
const forecast = require('../utils/forecast')
const geocode = require('../utils/geocode')
const app = express()
const urll = 'https://api.weatherapi.com/v1/current.json?key=5f6e69ba2706424fa8470548222512&q=London'
const publicDirectorypath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../partials')

hbs.registerPartials(partialsPath)
app.set('view engine', 'hbs')
app.use(express.static(publicDirectorypath))


app.get('', (req, res) => {
    res.render('index', {
        my_name: 'Abhinav'
    })
})

app.get('/about', (req, res) =>{
    res.render('about', {
        my_name : "Abhinav"
    })
})
  
app.get('/weather', (req, res) =>{
    if(!req.query.address){
        return res.send({
            error: 'Provide Address'
        })
    }
    geocode(req.query.address, (error, {address, location})=>{
        if(error){
            return res.send({error})
        }

        forecast(req.query.address, (error, forecastData) =>{
            if(error){
                return res.send({error})
            }
            res.send({
                
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

    if(error){
        res.send()
    }
    // res.send({
    //     Forcast: "elllooo",
    //     Location: "nowhere",
    //     address: req.query.address
    // })
})

app.get('/help', (req, res) =>{
    res.render('about', {
        my_name : "Abhinav"
    })
})
// request({url: urll}, (error, response)=>{
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// }) 

const geocodeurl = 'https://api.weatherapi.com/v1/current.json?key=5f6e69ba2706424fa8470548222512&q=boston'
request({url : geocodeurl, json: true}, (error, response)=>{
    const lat = response.body.location.lat
    const lon = response.body.location.lon
    console.log(lat, lon)
})


app.get('*', (req, res) =>{
    res.render('404')
})
app.listen(3000)