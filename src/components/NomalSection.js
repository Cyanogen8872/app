import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../assets/NotoSansTC-Bold.otf'
import { Card, Grid, Box, Slide, FormControlLabel, Switch, Hidden, Button  } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'


function NomalSection(props) {
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
    captionWidth = -props.pos / (window.innerHeight * 0.05) * 8
    captionWidth = captionWidth < 95 ? captionWidth : 95
  }


  return (
    <div>
      
      <Card sx={{ minWidth: 275, height: 1224+'px', border: "none", boxShadow: "none" }} className="text-center">
        <Box sx={{ height: 250 }}>
          <Box sx={{ width: 100+'%' }}>
          
            {/* <Slide direction="up" in={checked} mountOnEnter unmountOnExit> */}
              {/* <Grid
                container
                direction="row"
                justifyContent="center"
                height="100%"
              > */}
                <div style={{textAlign: 'center', }}>
                  <div className="caption font-face-gm text-center" style={{width: captionWidth + '%',  overflow:'hidden'}}>
                    <div style={{minWidth : window.innerWidth, padding: '0 !important'}}>
                    <h1>Web Development</h1>
                    </div>
                  </div>
                  <div className="caption font-face-gm text-center" style={{width: captionWidth + '%',  overflow:'hidden'}}>
                    <div style={{minWidth : window.innerWidth, padding: '0 !important'}}>
                  <h2>website for different company</h2>
                  </div>
                  </div>

                  <div style={{marginLeft: props.pos}} width="100%">
                    <div style={{whiteSpace: 'nowrap', overflow: 'scroll'}} className="scroll-container">
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/C2.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/C1.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/PMD1.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/PMD_2.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/G_M.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/CBS1.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/CBS2.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/C2.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/C1.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/PMD1.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/PMD_2.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/G_M.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/CBS1.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/CBS2.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/C2.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/C1.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/PMD1.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/PMD_2.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/G_M.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/CBS1.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/CBS2.png")} alt=""/></div></div>
                    </div>
                  </div>

                  {/* <div style={{marginLeft: -props.pos, textAlign:'right'}} width="100%">
                    <div style={{whiteSpace: 'nowrap', textAlign:'right'}}>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/CorinthiaBySea_2.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/M.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/CorinthiaBySea_1.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/C2.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/PMD.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/PMD2.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/C1.png")} alt=""/></div></div>
                      <div className='glass-box'><div className='glass-box-img'><img src={require("../assets/PMD.png")} alt=""/></div></div>
                    </div>
                  </div> */}
                  

                  
                  {/* <Grid container spacing={2}>
                    <Grid item xs={0} md={1}></Grid>
                    <Slide direction="right" in={leftTopImage} mountOnEnter unmountOnExit>
                    
                    <Grid item xs={12} md={4}>
                        <div>
                        <img width="100%" src={require("../assets/PMD.png")} alt=""/>
                        </div>
                        </Grid>
                    </Slide>
                    <Grid item xs={0} md={2}></Grid>
                    <Slide direction="left" in={rightTopImage} mountOnEnter unmountOnExit>
                    <Grid item xs={12} md={4}>
                      <div width="100%">
                      <img width="100%" src={require("../assets/PMD.png")} alt=""/>
                      </div>
                    </Grid>
                    </Slide>
                    <Grid item xs={0} md={1}></Grid>
                  </Grid> */}
                  {/* <div className="glassBox">
                    <div className="glassBox__imgBox">
                      <img src={require("../assets/PMD.png")} alt=""/>
                      <h3 className="glassBox__title">Golden Shoe</h3>
                    </div>
                    <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
                  </div>
                  <div className="glassBox">
                    <div className="glassBox__imgBox">
                      <img src={require("../assets/PMD.png")} alt=""/>
                      <h3 className="glassBox__title">Golden Shoe</h3>
                    </div>
                    <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
                  </div>
                  <div className="glassBox">
                    <div className="glassBox__imgBox">
                      <img src={require("../assets/PMD.png")} alt=""/>
                      <h3 className="glassBox__title">Golden Shoe</h3>
                    </div>
                    <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
                  </div> */}
                </div>
                {/* </Grid> */}
            {/* </Slide> */}
          </Box>
          <center>
            <Button style={{
                borderRadius: 0,
                padding: "0px 0px",
                borderColor: "black",
                color: "black",
                border: '2px solid',
                fontWeight: 500,
            }}  variant="outlined" className=" txt-hover-outer"><span className="txt-hover ">VIEW More</span></Button>
            <p style={{opacity: 0.5}}>Scroll</p> 
            <svg height="250px" style={{paddingTop: '0px'}}>
              <path fill="none" stroke="black" strokeWidth="2" id="triangle" d={`M150 0 L150 ` + -(((props.pos + window.innerHeight + 150) < 0 ? props.pos + window.innerHeight + 150 : '0'))}/>
            </svg>
          </center>
            
        </Box>
        
      </Card>
    </div>
  )
}

export default NomalSection