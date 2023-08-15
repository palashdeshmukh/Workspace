import { Link } from "react-router-dom";
import styled from 'styled-components'

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
height: 20px;
line-height: 20px;
display: flex;
font-size: 16px;
align-items: center;
`

export {CopywriteContainer,CopywriteBoxContainer,CopywriteItemContainer,CopywriteUl,CopywriteLiItems,CopywriteListLink};