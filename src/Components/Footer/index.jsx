import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const FooterMainContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding:10px;
  background-color:#222F3F;
  @media (max-width:468px){
    flex-direction: column;
    justify-content:center;
    align-items:start;

  }
`;

const FooterContainer = styled.div`
`;

const FooterList = styled(Link)`
  padding: 10px 20px;
  display: block;
  list-style: none;
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-style:italic;  &:hover{

  }

  @media (max-width:768px){
    font-size: 14px;
  }
  @media (max-width:1068px){
    font-size: 14px;
  }
`;
const FooterHeaderText=(props)=>{
  return <h3 style={{fontWeight:"800",textDecoration:"none"}}>{props.footText}</h3>
}

const FooterItemList = [
  [
    <FooterHeaderText footText="Support"/>,
    "Help Centre",
    "WorkspaceCover",
    "Supporting Helpless",
    "Cancellation options",
    "Our COVID-19 Response",
    "Report concern"
  ],
  [
    <FooterHeaderText footText="Community"/>,
    "Workspace disaster relief",
    "Combating discrimination"
  ],
  [
    <FooterHeaderText footText="Hosting"/>,
    "Workspace your home",
    "WorkspaceCover for Hosts",
    "Explore hosting resources",
    "Visit our community forum",
    "How to host responsibly"
  ],
  [
    <FooterHeaderText footText="Workspace"/>,
    "Newsroom",
    "Learn about new features",
    "Letter from our founders",
    "Careers",
    "Investors"
  ]
];

const Footer = () => {
  return (
    <FooterMainContainer>
      {FooterItemList.map((items, index) => (
        <FooterContainer key={index}>
          {items.map((item, subIndex) => (
            <FooterList key={subIndex}>{item}</FooterList>
          ))}
        </FooterContainer>
      ))}
    </FooterMainContainer>
   );
};

export default Footer;
