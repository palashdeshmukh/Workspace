import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import styled from 'styled-components';
import Cards from "../../Components/Cards";
const HomeContainer=styled.div`
width: 100%;
`
const Home=()=>{
    return(
<HomeContainer>
<Navbar/>
<Cards/>
<Footer/>
</HomeContainer>
        
    )
}

export default Home;