import styled from 'styled-components'
import { Link } from "react-router-dom";
const FooterContainer=styled.footer`
position: relative;
bottom: 0;
width: 100%;
max-width: 1460px;
display:flex;
flex-wrap:no-wrap;
@media (max-width:1068px){
    display:block;
}
`
const FooterGridContainer=styled.div`
width:100%;
background-color:#C41E3A;
display:flex;
@media (max-width:768px){
    flex-direction:column;
    flex-wrap:no-wrap;
}
`
const FooterGridItem=styled.div`
width:100%;
`
const FooterUnorderdList=styled.ul`
padding:0px;
width:100%;
margin:0px;
`
const FooterUnorderdListItems=styled.li`
width:100%;
list-style:none;
padding:15px 15px 15px 20px;
color:white;
font-family:Arial, Helvetica, sans-serif;

&.footHeadingtext{
  color:#C41E3A;
  height:60px;
  line-height:60px;
  padding:0 0 0 20px;
  font-size:20px;
  font-weight:bold;
  background-color:white

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

`
//Here is the Data of the table

const FooterItemListOne=[
    "Help Centre",
    "\u20B9entzyCover",
    "Supporting people with disabilites",
    "Cancellation options",
    "Our COVID-19 Response",
    "Report a neighborhood concern"
  ];

  const FooterItemListTwo=[
    "\u20B9entzy.org:disaster relief housing",
    "Combating discrimination",
  ];

  const FooterItemListThreeData=[
    "\u20B9entzy your home",
    "\u20B9entzyCover for Hosts",
    "Explore hosting resources",
    "Visit our community forum",
    "How to host responsibly",
  ];

  const FooterItemListFourData=[
    "Newsroom",
    "Learn about new features",
    "Letter from our founders",
    "Careers",
    "Investors"
  ]

export {FooterContainer,FooterGridContainer,FooterGridItem,FooterUnorderdItemLink,FooterUnorderdList,FooterUnorderdListItems,FooterItemListOne,FooterItemListTwo,FooterItemListThreeData,FooterItemListFourData}