import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../assets/NotoSansTC-Bold.otf'
import { Card, Grid, Box, Slide, FormControlLabel, Switch, Hidden, Button  } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'


function BeforeVideoSection(props) {
  // const [checked, setChecked] = React.useState(false);

  // const handleChange = () => {
  //   setChecked((prev) => !prev);
  // }

  let checked = false
  checked =  props.pos < -200

  let leftTopImage = false
  leftTopImage =  props.pos < -400

  let rightTopImage = false
  rightTopImage =  props.pos < -600

  let captionWidth = 0
  if (props.pos < 0) {
    captionWidth = -props.pos / (window.innerHeight * 0.05) * 12
    captionWidth = captionWidth < 95 ? captionWidth : 95
  }


  return (
    <div>
      
      <Card sx={{ minWidth: 275, height: 180+'px', border: "none", boxShadow: "none" }} className="text-center">
        <Box sx={{ height: 250 }}>
          <Box sx={{ width: 100+'%' }}>
              <div style={{textAlign: 'center', }}>
                <div className="caption font-face-gm text-center" style={{width: captionWidth + '%',  overflow:'hidden'}}>
                  <div style={{minWidth : window.innerWidth, padding: '0 !important'}}>
                  <h1>Game Development</h1>
                  </div>
                </div>
                <div className="caption font-face-gm text-center" style={{width: captionWidth + '%',  overflow:'hidden'}}>
                  <div style={{minWidth : window.innerWidth, padding: '0 !important'}}>
                  <h2>Self Project</h2>
                </div>
                </div>
              </div>
          </Box>
        </Box>
      </Card>
    </div>
  )
}

export default BeforeVideoSection