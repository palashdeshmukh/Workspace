import { Link } from "react-router-dom";
import styled from 'styled-components'
const menuItems=[
    {to:'/',label:'Home'},
    {to:'/blog',label:'Blog'},
    {to:'/about',label:'About'},
    {to:'/contact',label:'Explore'}
]
// background-color:#C41E3A;

const ItemContainer=styled.ul`

width:100%;
display:flex;
padding:0;
margin:0;
background-color:#222F3F;
@media (max-width:768px){
    flex-direction:column;
}
`    
const ItemList=styled.li`
width:100%;
list-style:none;
text-align:center;
display:flex;
justify-content:center;
align-items:center;
height:60px;
@media (max-width:1068px){
border:0px solid whitesmoke;

}

`
const ItemLink=styled(Link)`
text-decoration:none;
width:100%;
height:60px;
line-height:60px;
cursor:pointer;
font-weight:bold;
font-size:18px;
font-weight:900;
font-style:italic;
font-family:Arial, Helvetica, sans-serif;
text-transform:capitalize;
color:white;
&:hover{
    background-color:white;
    color:#131820 !important;

}
@media (max-width:1068px){
    font-size: 16px;
}
`
const NavbarContainer=styled.nav`
position: sticky;
z-index: 1;
top: 0;
display:flex;
width:100%;
padding: 0px;
justify-content:space-between;
background-color:#FFFAFA;
@media (max-width:768px){
    flex-direction:column;
}

`
const BarContainer=styled.div`
display: none;
@media (max-width:768px){
    display: block;
    width: 60px;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size:40px;
    height: 60px;
    background-color:#222F3F;
    color: white;
}
`
const NavContainerBox=styled.div`
box-sizing:border-box;
display:flex;
align-items:center;
width:288px;
justify-content:space-between;

@media (max-width:1068px){
    width: 100%;
}

`
const NavContainerBoxOne=styled(NavContainerBox)`
width:630px;
@media (max-width:768px){
    display: none;
    }
@media (max-width:1068px){
    width: 100%;
    }

`


export {menuItems,ItemContainer,ItemList,ItemLink,NavbarContainer,BarContainer,NavContainerBox,NavContainerBoxOne};