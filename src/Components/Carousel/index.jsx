import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SimpleSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    speed:3000,
    autoplaySpeed:4000,
    autoplay:true,


  };

  return (
    <div style={{marginBottom:"-10px"}} className="w-100">
      <Slider {...settings}>
        <div className="card rounded-0 border-2">
          <img src={require("../../Assets/images/Cafelab.jpeg")} alt={`Slide`} className="w-100"/>
        </div>
        <div className="card rounded-0 border-2">
          <img src={require("../../Assets/images/Cafelab1.jpeg")} alt={`Slide`} className="w-100"/>
        </div>
        <div className="card rounded-0 border-2" >
          <img src={require("../../Assets/images/Cafelab2.jpeg")} alt={`Slide`} className="w-100"/>
        </div>
        <div className="card rounded-0 border21">
          <img src={require("../../Assets/images/Cafelab3.jpeg")} alt={`Slide`} className="w-100"/>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
