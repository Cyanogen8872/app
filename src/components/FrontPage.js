import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../assets/NotoSansTC-Bold.otf'
import { Card, Grid } from '@mui/material'


function FrontPage(props) {
  return (
    <div>
      
      <Card sx={{ minWidth: 275, height: 1024+'px', border: "none", boxShadow: "none" }} className="text-center">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <div style={{textAlign: 'center'}}>
            <h1>Hello, my name is Alan</h1>
            <h2>I am a web developer and I am very passionate about technology and visualization.</h2> 
          </div>
          </Grid>
      </Card>
    
    </div>
  )
}

export default FrontPage