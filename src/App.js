import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './app.css';

class App extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </Slider>
      </div>
    );
  }
}

export default App;
