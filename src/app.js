
const express = require('express')
const app = express()
const port = process.env.PORT || 80
const path = require('path')

 
 app.get('/', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/index.html') )
  })


app.get('/Contrat', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/contrat.html') )
    console.log(req.query)
  })

  app.get('/mathapp', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/mathapp.html') )
  })

  app.get('/pavbhajiblog', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/blog1.html') )
  })
  app.get('/weatherapp', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/weatherawebapp.html') )
  })
  app.get('/PeriodicTable', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/PeriodicTable.html') )
  })

 
 




  //sounds
  app.get('/sounds/click_sound.mp3', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/sounds/click_sound.mp3') )
  }) 
  app.get('/btnClick.mp3', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/sounds/Btnclick.mp3') )
  })
  // images
  app.get('/logo', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/bg/bg.jpg') )
  })
  app.get('/x-mark.png', (req , res) =>{  res.sendFile(path.join(__dirname,'../public/bg/x-mark.png') )
  })
  app.get('/menu.png', (req , res) =>{  res.sendFile(path.join(__dirname,'../public/bg/menu.png') )
  })
  app.get('/close.png', (req , res) =>{  res.sendFile(path.join(__dirname,'../public/bg/close.png') )
})
app.get('/media/images/sort_asc_disabled.png', (req , res) =>{res.sendFile(path.join(__dirname,'../public/bg/sort_asc_disabled.png') )
})
app.get('/media/images/sort_asc.png', (req , res) =>{  res.sendFile(path.join(__dirname,'../public/bg/sort_asc.png') )
})
app.get('/media/images/sort_both.png', (req , res) =>{  res.sendFile(path.join(__dirname,'../public/bg/sort_both.png') )
})
app.get('/media/images/sort_desc_disabled.png', (req , res) =>{  res.sendFile(path.join(__dirname,'../public/bg/sort_desc_disabled.png') )
})
app.get('/media/images/sort_desc.png', (req , res) =>{res.sendFile(path.join(__dirname,'../public/bg/sort_desc.png') )
})
app.get('/uparrow' , (req , res) =>{
res.sendFile(path.join(__dirname , "../public/bg/uparrow.png"))
})
app.get('/downarrow' , (req , res) =>{
  res.sendFile(path.join(__dirname , "../public/bg/downarrow.png"))
  })

  // svgs
  app.get('/play.svg', (req , res) =>{res.sendFile(path.join(__dirname,'../public/bg/svgs/play.svg') )
})
app.get('/pause.svg', (req , res) =>{res.sendFile(path.join(__dirname,'../public/bg/svgs/pause.svg') )
})
app.get('/stop.svg', (req , res) =>{res.sendFile(path.join(__dirname,'../public/bg/svgs/stop.svg') )
})
  //setting animated weather icon

      //for Clouds

  app.get('/animated/cloudy-day-1.svg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/animated/cloudy-day-1.svg') )
  })

  app.get('/animated/cloudy-night-1.svg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/animated/cloudy-night-1.svg') )
  })
  
        //for Clear

  app.get('/animated/day.svg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/animated/day.svg') )
  })    

  app.get('/animated/night.svg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/animated/night.svg') )
  })
  
  
       //for Rain

  app.get('/animated/cloudy-night-1.svg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/animated//rainy-1.svg') )
  })

  app.get('/animated/cloudy-night-1.svg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/animated/rainy-4.svg') )
  })

// data json 
app.get('/data.json', (req , res) =>{
  res.sendFile(path.join(__dirname,'../public/data/data.json') )
})
app.get('/MoreData.json', (req , res) =>{
  res.sendFile(path.join(__dirname,'../public/data/MoreData.json') )
})

  // for perodic tables background 
  app.get('/particles.js', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/js/particles.js') )
  })

  app.get('/partricleapp.js', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/js/partricleapp.js') )
  })
  app.get('/earth.jpg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/bg/Earth.jpg') )
  })
  app.get('/moon.jpg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/bg/moon.jpg') )
  })
  app.get('/space.jpg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/bg/space.jpg') )
  })
  app.get('/stars.jpg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/bg/stars.jpeg') )
  })
  app.get('/sun.jpg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/bg/sun.jpg') )
  }) 
  app.get('/codebg.jpg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/bg/codebg.jpg') )
  })
  app.get('/sidebar-1bg.jpg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/bg/sidebar-1-bg.jpg') )
  })
  app.get('/sidebar-2bg.jpg', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/bg/sidebar-2-bg.jpg') )
  })
  // for perodic tables images  2 
   
  app.get('/bg/list.png', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/bg/list.png') )
  })


  // for vanila tilt js 
  app.get('/vanilla-tilt.js', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/js/vanilla-tilt.js') )
  })

  app.get('/media/js/jquery.dataTables.min.js', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/js/jquery.dataTables.min.js') )
  })
  app.get('/js/jquery.js', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/js/jquery.js') )
  })
  app.get('/media/css/jquery.dataTables.min.css', (req , res) =>{
    res.sendFile(path.join(__dirname,'../public/css/jquery.dataTables.min.css') )
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

 