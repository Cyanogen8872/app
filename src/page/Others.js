import React, { Component, useEffect, useState  } from 'react'
import { AnimatePresence, motion, Slider } from "framer-motion";
import { Card, Grid, Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom";
var Carousel = require('react-responsive-carousel').Carousel;

function Others() {
  const [offsetX, setoffsetX] = useState(0)
  const [offsetY, setoffsetY] = useState(0)
  
  useEffect(() => {
    document.addEventListener('mousemove', mouseMove);
  });

  const mouseMove = (e) => {
    const friction = 1/190
    let followX = (window.innerWidth / 2 - e.clientX);
    let followY = (window.innerHeight / 2 - e.clientY);

    let x = 0,
        y = 0
    x +=( (-followX - x) * friction);
    y += (followY - y) * friction;

    setoffsetX(x)
    setoffsetY(y)
  }
  
  let offset = {
    transform: `translate(0%, 0%) perspective(300px)
                rotateY(${offsetX}deg)
                rotateX(${offsetY}deg)
                `
               }
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      >
      <Card sx={{ minWidth: 275, border: "none", boxShadow: "none", width: '100%'}} className="text-center">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          >

          <Box style={{ paddingTop:'20px' }} >
            <AppBar position="static" style={{ background: '#fff', boxShadow: '0px 0px 0px' }}>
              <Toolbar>
                <Link to="/work" style={{ color: 'black',padding:'10px' }}>Web</Link>

                <Link to="/others" style={{ color: 'black',padding:'10px' }}>Others</Link>
              </Toolbar>
            </AppBar>
          </Box>

          <div width="100%" style={{height: '60px', width: '100%',}}></div>
          <div className='wrapper' style={offset}>
            
            <div className="shape">
            
            </div>
            <div className="shape2">
              <img style={{width: '100%', maxWidth: "590px"}} src={require("../assets/code.png")} alt=""/>
            </div>
            <p></p>
          </div>

          <div className="move-bg" style={{width: '100%'}}>
            <div style={{"width": '100%',boxShadow: '0px -10px 10px rgba(0, 0, 0, 0.1)', zIndex:32, alignItems: 'start' }} >
              

            <h2 className="text-center section-title-text">Game Development</h2>

            <div className="scene">
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
              
              <div className="text">
                <div className='text__face'>
                <h2>Simulation / RPG game</h2>
                <span>This is a farming simulator, it include Date time system, 
                  simplify plant-growing simulation, inventory & item mixing system, story trigging system.</span>
                </div>
              </div>
            </div>


            </div>

            <center style={{paddingTop: "0px",paddingBottom: '40px'}}>
              <div className="scene">
                <div height="36px"><h2>Time system</h2></div>
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
              <div height="36px"><h2>Plant-growing simulation</h2></div>
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

            <center style={{marginBottom: '60px'}}>
              <Button style={{
                    borderRadius: 0,
                    padding: "0px 0px",
                    borderColor: "rgba(0,0,0,0.6)",
                    color: "black",
                    border: '2px solid',
                    fontWeight: 500,
                }}  variant="outlined" className=" txt-hover-outer"><span className="txt-hover ">VIEW demo</span>
              </Button>
            </center>

            {/* <DragSlider slideApperance="scale">
              {[...Array(24).keys()].map((item, key) => (
                <FlexItem key={key} width={'300px'}>
                  {item + 1}
                </FlexItem>
              ))}
            </DragSlider> */}
            <h2>3D/ 2D illustration</h2>
            <div className="slider-container" style={{marginBottom: '60px'}}>
              <center>
                <Carousel className="slider" style={{position: 'absolute', maxWidth: '600px', width: '100%'}} showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true}>
                  <div>
                      <img src={require("../assets/24.jpeg")} />
                  </div>
                  <div>
                      <img src={require("../assets/iconPack.png")} />
                  </div>
                  <div>
                      <img src={require("../assets/3.jpeg")} />
                  </div>
                  <div>
                      <img src={require("../assets/04.jpg")} />
                  </div>
                  <div>
                      <img src={require("../assets/17.jpeg")} />
                  </div>
                </Carousel>
              </center>
            </div>
          </div>
          
          {/* <div>
            <div className='wrapper-photo' style={offset}>
            
              <div className="shape-photo">
              <img width="100%" src={require("../assets/PMD1.png")} alt=""/>
              </div>
              <div className="shape2-photo">
              </div>
              <p></p>
            </div>

          <h1 className="text-center">The Program for Management Development</h1>
          </div>

          <div>
            <div className='wrapper-photo' style={offset}>
            
              <div className="shape-photo">
              <img width="100%" src={require("../assets/PMD1.png")} alt=""/>
              </div>
              <div className="shape2-photo">
              </div>
              <p></p>
            </div>

          <h1 className="text-center">The Program for Management Development</h1>
          </div> */}
          

        </Grid>
      </Card>
    </motion.div>
  );
}

const pageVariants = {
  initial: {
    clipPath: "circle(0px at 40px 40px)",
    transition: { duration: 0 }
  },
  in: {
    clipPath: "circle(5000px at 40px 40px)",
    transition: { duration: 1, delay: 1 }
  },
  out: {
    clipPath: "circle(0px at 40px 40px)",
    transition: { duration: 1 }
  }
};

export default Others