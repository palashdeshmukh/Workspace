import React from "react";
import { styled } from "styled-components";
const LogoContainer=styled.div`
margin: 0; 
display:flex;
height:60px;
align-items:center;
`
const ImageContainer=styled.img`
width:60px;
height:50px;
display:block;
 @media (max-width:768px){
    width:50px;
height:40px;
  
}

`
const LogoText=styled.h2`
color:#222F3F;
width: 100%;
text-align: center;
font-size:45px;
font-weight:900;
font-style:italic;
height:60px;
line-height:70px;
font-family:Arial, Helvetica, sans-serif;
@media (max-width:768px){
    font-size:30px;
    line-height:75px;

}
`
const Logo=(props)=>{
    return(
        <>
       
        <LogoContainer> <ImageContainer src={require("../../src/Assets/images/workspacelogo.png")} alt="workspacelogo"/><LogoText>WorkSpace</LogoText></LogoContainer>
        </>
    )
}
export default Logo;