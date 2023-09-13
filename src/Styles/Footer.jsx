import styled from 'styled-components'
import { Link } from "react-router-dom";
const FooterContainer=styled.footer`
position:relative;
bottom: 0;
width: 100%;
display:flex;
flex-wrap:no-wrap;
@media (max-width:1068px){
    display:block;
}
`
const FooterGridContainer=styled.div`
width:100%;
background-color:#222F3F;
display:flex;
justify-content:space-around;
@media (max-width:768px){
    flex-direction:column;
    flex-wrap:no-wrap;
    justify-content:center;
    align-items:center;

}
`
const FooterGridItem=styled.div`
background-color:red;

`
const FooterUnorderdList=styled.ul`
padding:0px;
width:100%;
margin:0px;
`
const FooterUnorderdListItems=styled.li`
width:auto;
list-style:none;
padding:10px 10px 10px 20px;
color:white;

&.footHeadingtext{
  color:#222F3F;
  height:60px;
  line-height:60px;
  padding:0 0 0 20px;
  font-size:20px;
  font-weight:bold;
  background-color:#FFFAFA;
  border-radius:10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
`
const FooterUnorderdItemLink=styled(Link)`
width:100%;
text-decoration:none;
color:white;
letter-spacing:1px;
&:hover{
    text-decoration:underline;
}
@media (max-width:768px){
  font-size:14px;
}

`
//Here is the Data of the table



export {FooterContainer,FooterGridContainer,FooterGridItem,FooterUnorderdItemLink,FooterUnorderdList,FooterUnorderdListItems,FooterItemListOne,FooterItemListTwo,FooterItemListThreeData,FooterItemListFourData}