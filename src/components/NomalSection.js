import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../assets/NotoSansTC-Bold.otf'
import { Card, Grid, Box, Slide, FormControlLabel, Switch } from '@mui/material'


function NomalSection(props) {
  // const [checked, setChecked] = React.useState(false);

  // const handleChange = () => {
  //   setChecked((prev) => !prev);
  // }

  let checked = false
  checked =  props.pos < -200

  return (
    <div>
      <Card sx={{ minWidth: 275, height: 1024+'px', border: "none", boxShadow: "none" }} className="text-center">
        <Box sx={{ height: 180 }}>
          <Box sx={{ width: 100+'%' }}>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
              <Grid
                container
                direction="row"
                justifyContent="center"
                height="100%"
              >
                <div style={{textAlign: 'center'}}>
                  <h1>Web Development</h1>
                  <h2>123</h2> 
                  <div class="glassBox">
                    <div class="glassBox__imgBox">
                      <img src={require("../assets/PMD.PNG")} alt=""/>
                      <h3 class="glassBox__title">Golden Shoe</h3>
                    </div>
                    <div class="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
                  </div>
                  <div class="glassBox">
                    <div class="glassBox__imgBox">
                      <img src={require("../assets/PMD.PNG")} alt=""/>
                      <h3 class="glassBox__title">Golden Shoe</h3>
                    </div>
                    <div class="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
                  </div>
                  <div class="glassBox">
                    <div class="glassBox__imgBox">
                      <img src={require("../assets/PMD.PNG")} alt=""/>
                      <h3 class="glassBox__title">Golden Shoe</h3>
                    </div>
                    <div class="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
                  </div>
                  <div class="glassBox">
                    <div class="glassBox__imgBox">
                      <img src={require("../assets/PMD.PNG")} alt=""/>
                      <h3 class="glassBox__title">Golden Shoe</h3>
                    </div>
                    <div class="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
                  </div>
                </div>
                </Grid>
            </Slide>
          </Box>
        </Box>
      </Card>
    </div>
  )
}

export default NomalSection