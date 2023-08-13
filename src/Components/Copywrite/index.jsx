import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Icon from 'react-bootstrap-icons';

const CopywriteContainer=styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
background-color: white;
@media (max-width:1068px){
    flex-direction: column;
}
`
const CopywriteBoxContainer=styled.div`
width: 50%;
text-align:  center;
display: flex;
justify-content:${props=> props.$direct ? 'start' : 'end'};
@media (max-width:1068px){
    width: 100%;
}
&.copywritetext-content{
    @media (max-width:1068px){
        display: none;
    }
}

`
const CopywriteItemContainer=styled.div`
width:${props=>props.$copywriteboxSize ? "50%" : "70%"};
padding: 0;
@media (max-width:1345px){
    width:${props=>props.$copywriteboxSize ? "50%" : "85%"};
}
@media (max-width:1068px){
    width:${props=>props.$copywriteboxSize ? "100%" : "100%"};
}

`
const CopywriteUl=styled.ul`
width: 100%;
padding: 0;
margin: 0;
display:inline-flex;
padding: 10px 10px;
justify-content: space-between;
@media (max-width:1068px){
    display: flex;
    width: 100%;
    &.box2{
        flex-direction:row;
    }
}
`
const CopywriteLiItems=styled.li`
list-style: none;
color: gray;

@media (max-width:1068px){
    text-align: start;
}

`
const CopywriteListLink=styled(Link)`
width: 100%;
color: gray;
text-decoration: none;
`
const Copywrite=()=>{
    return(
        <>
       <CopywriteContainer>
       <CopywriteBoxContainer $direct className="copywritetext-content">
       <CopywriteItemContainer>
       <CopywriteUl>
       <CopywriteLiItems><CopywriteListLink>&copy; 2023 &#x20B9;entzyInc.All rights reserved</CopywriteListLink></CopywriteLiItems>
       <CopywriteLiItems><CopywriteListLink>Privacy</CopywriteListLink></CopywriteLiItems>
       <CopywriteLiItems><CopywriteListLink>Terms</CopywriteListLink></CopywriteLiItems>
       <CopywriteLiItems><CopywriteListLink>Site Map</CopywriteListLink></CopywriteLiItems>
       </CopywriteUl>
       </CopywriteItemContainer>
      </CopywriteBoxContainer>
       {/* This is the Second Container */}
       <CopywriteBoxContainer><CopywriteItemContainer $copywriteboxSize>
       <CopywriteUl className="box2">
       <CopywriteLiItems><CopywriteListLink><Icon.Globe/></CopywriteListLink></CopywriteLiItems>
       <CopywriteLiItems><CopywriteListLink>English(IN)</CopywriteListLink></CopywriteLiItems>
       <CopywriteLiItems><CopywriteListLink>&#x20B9; INR</CopywriteListLink></CopywriteLiItems>
       <CopywriteLiItems><CopywriteListLink><Icon.Facebook/></CopywriteListLink></CopywriteLiItems>
       <CopywriteLiItems><CopywriteListLink><Icon.Twitter/></CopywriteListLink></CopywriteLiItems>
       <CopywriteLiItems><CopywriteListLink><Icon.Instagram/></CopywriteListLink></CopywriteLiItems>
       </CopywriteUl>
       </CopywriteItemContainer></CopywriteBoxContainer>
       </CopywriteContainer>
       </>
    )
};

export default Copywrite;