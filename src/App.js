import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

class App extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
        <div><img src={require('./images/001.PNG')} alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src={require('./images/002.PNG')} alt="Credit to Alisa Anton on Unsplash"/></div>
        <div><img src={require('./images/003.PNG')} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        <div><img src={require('./images/004.PNG')} alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
        <div><img src={require('./images/005.PNG')} alt="Credit to Richard Nolan on Unsplash"/></div>
        <div><img src={require('./images/006.PNG')} alt="Credit to Cristina Gottardi on Unsplash"/></div>
        </Slider>
      </div>
    );
  }
}

export default App;
