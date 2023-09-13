import React from "react";
import { styled } from "styled-components";
const LogoContainer=styled.div`
width: 180px;
padding: 0px 20px;
margin: 0;
    
`
const LogoText=styled.h2`
color:#222F3F;
width: 100%;
text-align: center;
font-size:45px;
font-weight:900;
font-style:italic;
font-family:Arial, Helvetica, sans-serif;
`
const Logo=(props)=>{
    return(
        <>
        <LogoContainer><LogoText>WorkSpace</LogoText></LogoContainer>
        </>
    )
}
export default Logo;