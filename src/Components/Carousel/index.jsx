import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed:2000,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    border:"none",
  };

  const sliderContainerStyle = {
    maxHeight: "820px",
    maxWidth:"1460px", // Set the maximum height to 500px
    overflow: "hidden",
    border:"none", // Hide overflow content beyond the max height
  };

  return (
    <div style={sliderContainerStyle}>
      <Slider {...settings}>
        <div>
          <img src={require("../../Assets/images/pixel.jpg")} alt={`Slide`} width="100%" height="100%" />
        </div>
        <div>
          <img src={require("../../Assets/images/rentzy1.webp")} alt={`Slide`} width="100%" height="100%" />
        </div>
        <div>
          <img src={require("../../Assets/images/pixel.jpg")} alt={`Slide`} width="100%" height="100%" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
