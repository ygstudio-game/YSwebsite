
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
  app.get('/PeriodicTable', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/periodic.html') )
  })

  app.get('/Periodiccheck', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/pericheck.html') )
  })



  // temps
  app.get('/earthtirl', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/earthtirl.html') )
  })





  //sounds
  app.get('/sounds/click_sound.mp3', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/sounds/click_sound.mp3') )
  }) 
  app.get('/btnClick.mp3', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/sounds/Btnclick.mp3') )
  })
  // images
  app.get('/logo', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/bg.jpg') )
  })
  app.get('/x-mark.png', function (req, res) {  res.sendFile(path.join(__dirname,'../public/bg/x-mark.png') )
  })
  app.get('/menu.png', function (req, res) {  res.sendFile(path.join(__dirname,'../public/bg/menu.png') )
  })
  app.get('/close.png', function (req, res) {  res.sendFile(path.join(__dirname,'../public/bg/close.png') )
})
  //data
  app.get('/data.json', function (req, res) {  res.sendFile(path.join(__dirname,'../public/data/data.json') )
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



  // for perodic tables background 
  app.get('/particles.js', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/js/particles.js') )
  })

  app.get('/partricleapp.js', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/js/partricleapp.js') )
  })
  app.get('/earth.jpg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/Earth.jpg') )
  })
  app.get('/moon.jpg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/moon.jpg') )
  })
  app.get('/space.jpg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/space.jpg') )
  })
  app.get('/stars.jpg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/stars.jpeg') )
  })
  app.get('/sun.jpg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/sun.jpg') )
  }) 
  app.get('/codebg.jpg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/codebg.jpg') )
  })
  app.get('/sidebar-1bg.jpg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/sidebar-1bg.jpg') )
  })
  app.get('/sidebar-2bg.jpg', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/sidebar-2bg.jpg') )
  })
  // for perodic tables images  2 
   
  app.get('/bg/list.png', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/list.png') )
  })


  // for vanila tilt js 
  app.get('/vanilla-tilt.js', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/js/vanilla-tilt.js') )
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

 