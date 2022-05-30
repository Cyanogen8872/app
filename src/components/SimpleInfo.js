import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../assets/NotoSansTC-Bold.otf'
import { Card, Grid } from '@mui/material'


function SimpleInfo(props) {
  return (
    <div >
      <div  className="text-center">
          <div style={{textAlign: 'center'}}>
            <h1>My work / experiences</h1>
            <h2></h2> 
          </div>
        </div>
    </div>
  )
}

export default SimpleInfo