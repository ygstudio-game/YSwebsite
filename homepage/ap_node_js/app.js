
const express = require('express')
const app = express()
const port = process.env.PORT || 80;
const path = require('path')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../htmlfiles/index.html') )
  })


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../htmlfiles/index.html') )
  })


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../htmlfiles/index.html') )
  })


app.get('/Contrat', function (req, res) {
    res.sendFile(path.join(__dirname,'../../Contrat/contrat.html') )
  })

  app.get('/mathapp', function (req, res) {
    res.sendFile(path.join(__dirname,'../../mathapp/htmlfiles/mathapp.html') )
  })

  app.get('/pavbhajiblog', function (req, res) {
    res.sendFile(path.join(__dirname,'../../pavbhajiblog/htmlfiles/index.html') )
  })
 
  app.get('/logo', function (req, res) {
    res.sendFile(path.join(__dirname,'../../Contrat/bg/bg.jpg') )
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})