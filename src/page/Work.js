import React, { Component, useEffect, useState  } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Card, Grid, Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom";

function Work() {
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
      <Card sx={{ minWidth: 275, border: "none", boxShadow: "none", width: '100%' }} className="text-center">
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

          <div width="200%" style={{height: '60px', width: '100%',}}></div>
          <div className='wrapper' style={offset}>
            
            <div className="shape">
            
            </div>
            <div className="shape2">
              <div style={{fontSize: '130px'}}>Web Development</div>
              {/* <img style={{width: '100%', maxWidth: "590px"}} src={require("../assets/code.png")} alt=""/> */}
            </div>
            <p></p>
          </div>

          <div className="" style={{width: '100%', zIndex: 50, backgroundColor: 'white'}}>
            <div style={{"width": '100%',boxShadow: '0px -10px 10px rgba(0, 0, 0, 0.1)', zIndex:32 }} >
              

            <h2 className="text-center section-title-text">Corinthia by the sea</h2>
            <div style={{"width": '100%', zIndex:32 }} >
              <div className="scene-nomal">
                <div className="card">
                  <div className="card__face">
                    <img src={require("../assets/CBS1.png")} width="100%" alt=""/>
                  </div>
                </div>
              </div>

              <div className="scene-nomal">
                <div className="card">
                  <div className="card__face ">
                    <img src={require("../assets/CBS2.png")} width="100%" alt=""/>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-center section-title-text">The Program for Management Development</h2>
              <div className="scene-nomal">
                <div className="card">
                  <div className="card__face">
                    <img src={require("../assets/PMD1.png")} width="100%" alt=""/>
                  </div>
                </div>
              </div>

              <div className="scene-nomal">
                <div className="card">
                  <div className="card__face ">
                    <img src={require("../assets/PMD_2.png")} width="100%" alt=""/>
                  </div>
                </div>
              </div>
            </div>

            
            <h2 className="text-center section-title-text">Government Project</h2>
            <div style={{"width": '100%', zIndex:32 }} >
              <div className="scene-nomal">
                <div className="card">
                  <div className="card__face">
                    <img src={require("../assets/C1.png")} width="100%" alt=""/>
                  </div>
                </div>
              </div>

              <div className="scene-nomal">
                <div className="card">
                  <div className="card__face ">
                    <img src={require("../assets/C2.png")} width="100%" alt=""/>
                  </div>
                </div>
              </div>

              <div className="scene-nomal">
                <div className="card">
                  <div className="card__face ">
                    <img src={require("../assets/C3.png")} width="100%" alt=""/>
                  </div>
                </div>
              </div>
            </div>


            <h2 className="text-center section-title-text">Universal Music Hong Kong x Mcdonald</h2>
            <div style={{"width": '100%', zIndex:32 }} >
              <div className="scene-nomal">
                <div className="card">
                  <div className="card__face">
                    <img src={require("../assets/G_M.png")} width="100%" alt=""/>
                  </div>
                </div>
              </div>
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

export default Work