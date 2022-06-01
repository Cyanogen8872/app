import React, { Component } from 'react'
import { Card, Button } from '@mui/material'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../assets/NotoSansTC-Bold.otf'

var Carousel = require('react-responsive-carousel').Carousel;

function VideoSectionWithSlider(props) {
  let eleWidth = 55
  
  if (props.pos < 0) {
    eleWidth =  (50 + (-props.pos / (window.innerHeight * 0.1)) * 10)
    eleWidth = eleWidth < 100 ? eleWidth : 100
  }

  const targetPos = props.pos + (window.innerHeight * 0.8)
  
  let captionWidth = 0
  if (targetPos < 0) {
    captionWidth = -targetPos / (window.innerHeight * 0.05) * 6
    captionWidth = captionWidth < 95 ? captionWidth : 95
  }

  return (
    <div style={{
        width:eleWidth + '%', 
        paddingTop: props.pos < window.innerHeight ? ((props.pos < window.innerHeight) && captionWidth !== 95 ? -props.pos - window.innerHeight: props.pos + (window.innerHeight * 0.8)) : 0,
        paddingBottom: '46px'
        }}>
      <div className="container video-container">
        <video 
          className="video-center" 
          id="samp"
          src={"https://videoweb8872.s3.us-west-1.amazonaws.com/20171010_1200162.mp4"}
          height="100%" muted loop playsInline autoPlay controls={false}>
        </video>z
        <div className="caption font-face-gm text-center" style={{width: captionWidth + '%',  overflow:'hidden'}}>
          <div style={{minWidth : window.innerWidth, padding: '0 !important'}}>
            <h1 style={{color: 'white', marginTop: moveCaption()+ 'px', fontSize: '35px',}} >SIMULATION / RPG GAME</h1>
          </div>
        </div>
      </div>

      <center style={{paddingTop: "60px",paddingBottom: '40px'}}>
        <div className="scene">
          <div height="36px"><h2>Time System</h2></div>
          <div className="card">
            <div className="card__face card__face--front">
              <img src={require("../assets/time_system_night.png")} width="100%" alt=""/>
            </div>
            <div className="card__face card__face--back">
              <img src={require("../assets/time_system_day.png")} width="100%" alt=""/>
            </div>
          </div>
        </div>
        <div className="scene">
        <div height="36px"><h2>Planting System</h2></div>
          <div className="card">
            <div className="card__face card__face--front">
              <img src={require("../assets/plant_system.png")} width="100%" alt=""/>
            </div>
            <div className="card__face card__face--back">
              <img src={require("../assets/plant_system.png")} width="100%" alt=""/>
            </div>
          </div>
        </div>

        <div className="scene">
        <div height="36px"><h2>Inventory / Item mix system</h2></div>
          <div className="card">
            <div className="card__face card__face--front">
              <img src={require("../assets/inventory_system.png")} width="100%" alt=""/>
            </div>
            <div className="card__face card__face--back">
              <img src={require("../assets/inventory_system.png")} width="100%" alt=""/>
            </div>
          </div>
        </div>
      </center>
      <center>
        <Button style={{
              borderRadius: 0,
              padding: "0px 0px",
              borderColor: "rgba(0,0,0,0.6)",
              color: "black",
              border: '2px solid',
              fontWeight: 500,
          }}  variant="outlined" className=" txt-hover-outer"><span className="txt-hover ">VIEW More</span>
        </Button>
      </center>

      {/* <div style={{ width: '100%'}}>
      <div style={{display: 'inline-block', width: '25%', minWidth: '390px'}}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={require("../assets/plant_system.png")} width="100%" alt=""/>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{display: 'inline-block', width: '25%', minWidth: '390px'}}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
            <img src={require("../assets/plant_system.png")} width="100%" alt=""/>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
      </div> */}

      {/* <div className="slider-container" >
        <center>
        <Carousel className="slider"  width="50%" style={{position: 'absolute'}} showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true}>
          <div>
              <img src={require("../assets/plant_system.png")} />
          </div>
          <div>
              <img src={require("../assets/inventory_system.png")} />
          </div>
          <div>
              <img src={require("../assets/time_system_day.png")} />
          </div>
        </Carousel>
        </center>
      </div> */}
    </div>
  )
  
}
//require("../assets/20171010_1200162.mp4")
const moveCaption = () => {
  return (window.innerHeight * 0.8)
}

export default VideoSectionWithSlider