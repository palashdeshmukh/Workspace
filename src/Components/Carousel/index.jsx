import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    speed:2000,
    autoplaySpeed:2000,
    autoplay:true,
    centerPadding:0,
    centerMode:true,
    adaptiveHeight:true
    
  };

  const sliderContainerStyle = {
    display:"block",

  };

  return (
    <div style={sliderContainerStyle}>
      <Slider {...settings}>
        <div>
          <img src={require("../../Assets/images/Cafelab.jpeg")} alt={`Slide`} width="100%" height="100%" />
        </div>
        <div>
          <img src={require("../../Assets/images/Cafelab1.jpeg")} alt={`Slide`} width="100%" height="100%" />
        </div>
        <div>
          <img src={require("../../Assets/images/Cafelab2.jpeg")} alt={`Slide`} width="100%" height="100%" />
        </div>
        <div>
          <img src={require("../../Assets/images/Cafelab3.jpeg")} alt={`Slide`} width="100%" height="100%" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
