import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../assets/NotoSansTC-Bold.otf'
import { Card, Grid } from '@mui/material'


function FrontPage(props) {
  return (
    <div>
        <div style={{ overflow:'hidden', width: '100%', position: 'absolute', height: '990px', left: '0%'}} className="text-center">
          <div className="float-animation1"><img style={{position: 'absolute', top: -150 - (-(props.pos + window.innerHeight) * 0.05), right: window.innerWidth *0.6,  height: '990px',opacity: 0.3}} src={require("../assets/computer.png")} alt=""/></div>
          <img className="float-animation2" style={{position: 'absolute', top: 230 + (-(props.pos + window.innerHeight) * 0.2), right: (window.innerWidth *0.5) - 240, maxWidth: '485px', opacity: 0.6}} src={require("../assets/code.png")} alt=""/>
          <img className="float-animation3" style={{position: 'absolute', top: 450 - (-(props.pos + window.innerHeight) * 0.1), right: (window.innerWidth *0.3) - 74,  maxWidth: '158px', width: '25%', opacity: 0.3}} src={require("../assets/brush.png")} alt=""/>
          <img className="float-animation4" style={{position: 'absolute', top: 400 - (-(props.pos + window.innerHeight) * 0.1), right: (window.innerWidth *0.7) - 124,  maxWidth: '250px', width: '25%', opacity: 0.3}} src={require("../assets/bird.png")} alt=""/>
          <img className="float-animation5" style={{position: 'absolute', top: 50 - (-(props.pos + window.innerHeight) * 0.08), right: (window.innerWidth *0.25) - 134,  maxWidth: '270px', width: '30%', opacity: 0.3}} src={require("../assets/cup.png")} alt=""/>
        </div>
      <Card sx={{ minWidth: 275, height: 1024+'px', border: "none", boxShadow: "none" }} className="text-center">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >

          <div style={{textAlign: 'center', padding: window.innerHeight * 0.6}}>
            <h1>Hello, my name is Alan</h1>
            <h2>I am a web developer and I am very passionate about technology and visualization.</h2> 
            <p style={{opacity: 0.5}}>Scroll</p> 
            <svg height="250px" style={{paddingTop: '20px'}}>
              <path fill="none" stroke="black" strokeWidth="2" id="triangle" d={`M150 0 L150 ` + -((props.pos + window.innerHeight < 0 ? ((props.pos + window.innerHeight) < 250 ? (props.pos + window.innerHeight) : '0') : '0'))}/>
            </svg>
          </div>
            
          </Grid>
          
      </Card>
    
    </div>
  )
}

export default FrontPage