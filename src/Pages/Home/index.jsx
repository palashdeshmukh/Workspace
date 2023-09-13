import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import styled from 'styled-components';
import Copywrite from "../../Components/Copywrite";
import SimpleSlider from "../../Components/Carousel";
import IntroVideo from "../../Components/IntroVideo";
import Facality from "../../Components/Facality";
const HomeContainer=styled.div`
width: 100%;
`
const Home=()=>{
    return(
<HomeContainer>
<Navbar/>
<IntroVideo/>
<Facality/>
<SimpleSlider/>
<Footer/>
<Copywrite/>
</HomeContainer>
        
    )
}

export default Home;