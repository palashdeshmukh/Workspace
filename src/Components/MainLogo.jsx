import React from "react";
import { Alt } from "react-bootstrap-icons";
import { styled } from "styled-components";
const LogoContainer=styled.div`
margin: 0; 
padding:2px 5px;   
display:flex;
height:60px;

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
       
        <LogoContainer> <img src={require("../../src/Assets/images/workspacelogo.png")} alt="workspacelogo" width="70px" height="50px"/><LogoText>WorkSpace</LogoText></LogoContainer>
        </>
    )
}
export default Logo;