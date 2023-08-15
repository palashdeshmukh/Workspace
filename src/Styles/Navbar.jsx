import { Link } from "react-router-dom";
import styled from 'styled-components'
const menuItems=[
    {to:'/',label:'Home'},
    {to:'/blog',label:'Blog'},
    {to:'/about',label:'About'},
    {to:'/contact',label:'Contact'}
]
// background-color:#C41E3A;

const ItemContainer=styled.ul`

width:100%;
display:flex;
padding:0;
margin:0;
background-color:#222F3F;
@media (max-width:1068px){
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
font-family:Arial, Helvetica, sans-serif;
text-transform:capitalize;
color:white;
&:hover{
    background-color:white;
    color:#131820 !important;

}
`
const NavbarContainer=styled.nav`
position: sticky;
z-index: 1;
top: 0;
display:flex;
width:100%;
justify-content:space-between;
background-color:#FFFAFA;
@media (max-width:1068px){
    flex-direction:column;
}

`
const BarContainer=styled.div`
@media (max-width:1068px){
    width: 100%;
height: 60px;

max-width: 60px;
    &::after{
    content:'\u2630';
    color:white;
    position:relative;
    width:100%;
    height:60px;
    line-height:60px;
    font-size:40px;
    text-align:center;
    display:block;
    background-color:#222F3F;
    }
}
`
const NavContainerBox=styled.div`
box-sizing:border-box;
display:flex;
align-items:center;
width:100%;
max-width:288px;
justify-content:space-between;
&::before{
    content:'\u20B9entzy';
    position:relative;
    height:60px;
    color:#222F3F;
    line-height:50px;
    font-size:50px;
    text-align:center;
    display:block;
    font-weight:bold;
    padding-left:20px;
    padding-right:10px;
    }
&::before{
    width:100%;
}
@media (max-width:1068px){
    max-width: 100%;
}

`
const NavContainerBoxOne=styled(NavContainerBox)`
display:block;
max-width:630px;
&::before{
    content:none;
}
@media (max-width:1068px){
    max-width:100%;}
&::after{
    content:none;
}

`


export {menuItems,ItemContainer,ItemList,ItemLink,NavbarContainer,BarContainer,NavContainerBox,NavContainerBoxOne};