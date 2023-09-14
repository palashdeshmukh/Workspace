import React from "react";
import Myimage from "../../Assets/images/Cafelab3.jpeg"
import { Component } from "react";
import Slider from "react-slick";

export default class Cards extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      swipeToSlide: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      ],
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55;`
        );
      }
      
    };
    return (
      <div className="p-2">
        <Slider {...settings}>
        <div className="p-2 d-flex justify-content-center">   
        <div class="card" style={{width:"26rem"}}>
  <img src={Myimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" class="btn btn-primary w-100">View The Workspace </a>
  </div>
</div>
</div>


<div className="p-2 d-flex justify-content-center">   
<div class="card" style={{width:"26rem"}}>
  <img src={Myimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" class="btn btn-primary w-100">View The Workspace </a>
  </div>
</div>
</div>



<div className="p-2  d-flex justify-content-center">  
<div class="card" style={{width:"26rem"}}>
  <img src={Myimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" class="btn btn-primary w-100">View The Workspace </a>
  </div>
</div>
</div>



<div className="p-2  d-flex justify-content-center">   
<div class="card" style={{width:"26rem"}}>
  <img src={Myimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" class="btn btn-primary w-100">View The Workspace </a>
  </div>
</div>
</div>



<div className="p-2  d-flex justify-content-center">   
<div class="card" style={{width:"26rem"}}>
  <img src={Myimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" class="btn btn-primary w-100">View The Workspace </a>
  </div>
</div>
</div>



<div className="p-2  d-flex justify-content-center">   
<div class="card" style={{width:"26rem"}}>
  <img src={Myimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" class="btn btn-primary w-100">View The Workspace </a>
  </div>
</div>
</div>


<div className="p-2  d-flex justify-content-center">   
<div class="card" style={{width:"26rem"}}>
  <img src={Myimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" class="btn btn-primary w-100">View The Workspace </a>
  </div>
</div>
</div>



<div className="p-2  d-flex justify-content-center">   
<div class="card" style={{width:"26rem"}}>
  <img src={Myimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" class="btn btn-primary w-100">View The Workspace </a>
  </div>
</div>
</div>


<div className="p-2  d-flex justify-content-center">   
<div class="card" style={{width:"26rem"}}>
  <img src={Myimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" class="btn btn-primary w-100">View The Workspace </a>
  </div>
</div>
</div>


<div className="p-2  d-flex justify-content-center">   
<div class="card" style={{width:"26rem"}}>
  <img src={Myimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" class="btn btn-primary w-100">View The Workspace </a>
  </div>
</div>
</div>



<div className="p-2  d-flex justify-content-center">   
<div class="card" style={{width:"26rem"}}>
  <img src={Myimage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.google.com" class="btn btn-primary w-100">View The Workspace </a>
  </div>
</div>
</div>
        </Slider>
      </div>
    );
  }
}