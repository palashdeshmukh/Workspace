import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import styled from 'styled-components';
import Cards from "../../Components/Cards";
import Copywrite from "../../Components/Copywrite";
const HomeContainer=styled.div`
width: 100%;
`
const Home=()=>{
    return(
<HomeContainer>
<Navbar/>
<Cards/>
<Cards/>
<Footer/>
<Copywrite/>
</HomeContainer>
        
    )
}

export default Home;