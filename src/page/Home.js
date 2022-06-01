import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../assets/NotoSansTC-Bold.otf'
import '../App.css';
import VideoSectionWithSlider from '../components/VideoSectionWithSlider.js'
import BeforeVideoSection from '../components/BeforeVideoSection.js'
import FrontPage from '../components/FrontPage.js'
import SimpleInfo from '../components/SimpleInfo.js'
import NomalSection from '../components/NomalSection.js'
import cloneDeep from 'lodash/cloneDeep';
import { motion } from "framer-motion";



import React, { Component } from 'react'
import { duration } from "@mui/material";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 50,
      pos: {
        front: -window.innerHeight,
        nomalSection1: 0,
        beforeVideoSection: 0,
        videoSection1: 0,
      },
    }
    this.front = React.createRef();
    this.videoSection1 = React.createRef();
    this.nomalSection1 = React.createRef();
    this.beforeVideoSection = React.createRef();
    window.addEventListener('scroll', () => {this.handleScroll(this.videoSection1)});
  }

  handleScroll() {
    this.scorllResizeSection()
  }

  scorllResizeSection() {
    const pos = cloneDeep(this.state.pos)

    if (this.front.current) {
      let height = this.front.current.getBoundingClientRect().y
      let targetY = height - window.innerHeight
      pos.front = targetY
    }
    
    if (this.beforeVideoSection.current) {
      let height =this.beforeVideoSection.current.getBoundingClientRect().y
      let targetY = height - window.innerHeight
      pos.beforeVideoSection = targetY
    }
      
    if (this.videoSection1.current) {
      let height =this.videoSection1.current.getBoundingClientRect().y
      let targetY = height - window.innerHeight
      pos.videoSection1 = targetY
    }

    if (this.nomalSection1.current) {
      let height =this.nomalSection1.current.getBoundingClientRect().y
      let targetY = height - window.innerHeight
      pos.nomalSection1 = targetY
    }

    this.setState({
      pos,
    })
  }

  

  render() {
    const pageVariants = {
      initial: {
        clipPath: "circle(0px at 40px 40px)",
        transition: { duration: 0 }
      },
      in: {
        clipPath: "circle(5800px at 40px 40px)",
        transition: { duration: 1, delay: 1 }
      },
      out: {
        clipPath: "circle(0px at 40px 40px)",
        transition: { duration: 1 }
      }
    };
    
    const pageTransition = {
    };
    
    const pageStyle = {
    };

    return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
        <div>
          <div ref={this.front}>
            <div> 
          <FrontPage pos={this.state.pos.front}></FrontPage>
            </div>
          </div>
          <SimpleInfo></SimpleInfo>
          <div ref={this.nomalSection1}>
            <div>
              <NomalSection pos={this.state.pos.nomalSection1}></NomalSection>
            </div>
          </div>
          <div ref={this.beforeVideoSection}>
            <div >
              <BeforeVideoSection pos={this.state.pos.beforeVideoSection}></BeforeVideoSection>
            </div>
          </div>
          <div ref={this.videoSection1}>
            <div >
              <VideoSectionWithSlider pos={this.state.pos.videoSection1}></VideoSectionWithSlider>
            </div>
          </div>
        </div>
    </motion.div>
      
    );
  }
}

export default Home;
