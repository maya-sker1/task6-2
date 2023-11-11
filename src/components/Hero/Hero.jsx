import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Hero.css';
function Hero() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="box1">
          <div className="text">
            <p>Zania Black Edition</p>
            <h1>Curvy Bevel Dual Audio </h1>
            <button class="but">SHOP NOW</button>
          </div>
        </div>
        <div className="box2">
        <div className="text2">
            <p>4K Resolution</p>
            <h1>Exclusive Steel Frame </h1>
            <button class="but">SHOP NOW</button>
          </div>
        </div>
        <div className="box3">
        <div className="text3">
            <p>Delta Zertiga Processor</p>
            <h1>Full Screen Display</h1>
            <button class="but">SHOP NOW</button>
          </div>
        </div>
       
      </Slider>
    </div>
  );

}

export default Hero