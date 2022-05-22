import React, { Component } from 'react'
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
  if (props.pos !== undefined) {
    console.log(targetPos)
  }
  
  let captionWidth = 0
  if (targetPos < 0) {
    captionWidth = -targetPos / (window.innerHeight * 0.05) * 10
    captionWidth = captionWidth < 95 ? captionWidth : 95
  }

  return (
    <div style={{width:eleWidth + '%'}}>
      <div className="container video-container">
        <video 
          className="video-center" 
          id="samp"
          src={require("../assets/20171010_1200162.mp4")}
          height="100%" muted loop playsInline autoPlay controls={false}>
        </video>
        <div className="caption font-face-gm text-center" style={{width: captionWidth + '%',  overflow:'hidden'}}>
          <div style={{minWidth : window.innerWidth, padding: '0 !important'}}>
          <h1 style={{color: 'white', marginTop: moveCaption()+ 'px', fontSize: '35px',}} >SIMULATION / RPG GAME</h1>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <Carousel className="slider" style={{position: 'absolute'}} showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true}>
          <div>
              <img src={require("../assets/Dialog.jpg")} />
          </div>
          <div>
              <img src={require("../assets/Dialog.jpg")} />
              <p className="legend">Legend 1</p>
          </div>
        </Carousel>
      </div>
    </div>
  )
  
}

const moveCaption = () => {
  return (window.innerHeight * 0.8)
}

export default VideoSectionWithSlider