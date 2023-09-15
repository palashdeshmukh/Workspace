import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import styled from 'styled-components';
import Copywrite from "../../Components/Copywrite";
import SimpleSlider from "../../Components/Carousel";
import IntroVideo from "../../Components/IntroVideo";
import Facality from "../../Components/Facality";
import Cards from "../../Components/Cards";
import Accordion from "../../Components/Accordion";
import MarqueeCompany from "../../Components/MarqueeCompany";
import TypingHeading from "../../Components/TypingHeading";
import InfoContainer from "../../Components/InfoContainer";
const HomeContainer=styled.div`
width: 100%;
`
const Home=()=>{
    return(
<HomeContainer>
<Navbar/>
<IntroVideo/>
<TypingHeading/>
<Facality/>
<InfoContainer/>
<Cards/> 
<SimpleSlider/>
<Accordion/>
<MarqueeCompany/>
<Footer/>
<Copywrite/>
</HomeContainer>
        
    )
}

export default Home;