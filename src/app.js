
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
    res.sendFile(path.join(__dirname,'../public/we.html') )
  })
  app.get('/logo', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/bg/bg.jpg') )
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

 