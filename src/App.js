import logo from './logo.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './assets/NotoSansTC-Bold.otf'
import './App.css';
import VideoSectionWithSlider from './components/VideoSectionWithSlider.js'
import FrontPage from './components/FrontPage.js'
import NomalSection from './components/NomalSection.js'
import cloneDeep from 'lodash/cloneDeep';
// import Btn2 from './components/DangerButton.js'
import React, { Component } from 'react'
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
// import calculateWinner from './helpers/calculateWinner.helper.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 50,
      pos: {
        front: 0,
        nomalSection1: 0,
        videoSection1: 0,
      },
    }

    this.videoSection1 = React.createRef();
    this.nomalSection1 = React.createRef();
    window.addEventListener('scroll', () => {this.handleScroll(this.videoSection1)});
  }

  handleScroll() {
    this.scorllResizeSection()
  }

  scorllResizeSection() {
    const pos = cloneDeep(this.state.pos)
      
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
    return (
      <div>
        <FrontPage></FrontPage>
        <div ref={this.nomalSection1}>
          <div>
            <NomalSection pos={this.state.pos.nomalSection1}></NomalSection>
          </div>
        </div>
        <div ref={this.videoSection1}>
          <div >
            <VideoSectionWithSlider pos={this.state.pos.videoSection1}></VideoSectionWithSlider>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
