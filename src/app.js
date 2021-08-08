
const express = require('express')
const app = express()
const port = process.env.PORT || 80
const path = require('path')

 
 app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/index.html') )
  })


app.get('/Contrat', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/contrat.html') )
    console.log(req.query)
  })

  app.get('/mathapp', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/mathapp.html') )
  })

  app.get('/pavbhajiblog', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/blog1.html') )
  })
  app.get('/weatherapp', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/weatherawebapp.html') )
  })
 
  app.get('/logo', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/bg.jpg') )
  })

  //setting animated weather icon

      //for Clouds

  app.get('/animated/cloudy-day-1.svg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/animated/cloudy-day-1.svg') )
  })

  app.get('/animated/cloudy-night-1.svg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/animated/cloudy-night-1.svg') )
  })
  
        //for Clear

  app.get('/animated/day.svg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/animated/day.svg') )
  })    

  app.get('/animated/night.svg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/animated/night.svg') )
  })
  
       //for Rain

  app.get('/animated/cloudy-night-1.svg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/animated//rainy-1.svg') )
  })

  app.get('/animated/cloudy-night-1.svg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/animated/rainy-4.svg') )
  })







app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

 