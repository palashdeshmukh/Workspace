import React from "react";
import { FooterContainer,FooterGridContainer,FooterGridItem,FooterUnorderdItemLink,FooterUnorderdList,FooterUnorderdListItems,FooterItemListOne,FooterItemListTwo,FooterItemListThreeData,FooterItemListFourData } from "../../Styles/Footer";

const Footer = () => {
    return (
      <>
            <FooterContainer>
              <FooterGridContainer>
              <FooterGridItem>
                <FooterUnorderdList>
                <FooterUnorderdListItems className="footHeadingtext">Support</FooterUnorderdListItems>
                {FooterItemListOne.map((item,index)=>(
                <FooterUnorderdListItems key={index}><FooterUnorderdItemLink>{item}</FooterUnorderdItemLink></FooterUnorderdListItems>
                ))}
                </FooterUnorderdList>
              </FooterGridItem>

              <FooterGridItem>
                <FooterUnorderdList>
                <FooterUnorderdListItems className="footHeadingtext">Community</FooterUnorderdListItems>
                {FooterItemListTwo.map((item,index)=>(
                <FooterUnorderdListItems key={index}><FooterUnorderdItemLink>{item}</FooterUnorderdItemLink></FooterUnorderdListItems>
                ))}
                </FooterUnorderdList>
              </FooterGridItem>
              </FooterGridContainer>
             <FooterGridContainer>

             <FooterGridItem>
                <FooterUnorderdList>
                <FooterUnorderdListItems className="footHeadingtext">Hosting</FooterUnorderdListItems>
                {FooterItemListThreeData.map((items,index)=>(
                <FooterUnorderdListItems key={index}><FooterUnorderdItemLink>{items}</FooterUnorderdItemLink></FooterUnorderdListItems>
                ))}
                </FooterUnorderdList>
              </FooterGridItem>
                 
              <FooterGridItem>
                <FooterUnorderdList>
                <FooterUnorderdListItems className="footHeadingtext">&#x20B9;entzy</FooterUnorderdListItems>
                {FooterItemListFourData.map((item,index)=>(
                <FooterUnorderdListItems key={index}><FooterUnorderdItemLink>{item}</FooterUnorderdItemLink></FooterUnorderdListItems>
                ))}
                </FooterUnorderdList>
              </FooterGridItem>
          
              </FooterGridContainer>
            </FooterContainer>
      </>
    );
  };
  
export default Footer;