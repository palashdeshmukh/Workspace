import React from "react";
import { FooterContainer,FooterGridContainer,FooterGridItem,FooterUnorderdItemLink,FooterUnorderdList,FooterUnorderdListItems } from "../../Styles/Footer";

const Footer = () => {
    return (
      <>
            <FooterContainer>
              <FooterGridContainer>
              <FooterGridItem>
                <FooterUnorderdList>
                <FooterUnorderdListItems className="footHeadingtext">Support</FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink> Help Centre</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>&#x20B9;entzyCover</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Supporting people with disabilites</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Cancellation options</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Our COVID-19 Response</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Report a neighborhood concern</FooterUnorderdItemLink></FooterUnorderdListItems>
                </FooterUnorderdList>
              </FooterGridItem>

              <FooterGridItem>
                <FooterUnorderdList>
                <FooterUnorderdListItems className="footHeadingtext">Community</FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>&#x20B9;entzy.org:disaster relief housing</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Combating discrimination</FooterUnorderdItemLink></FooterUnorderdListItems>
                </FooterUnorderdList>
              </FooterGridItem>
              </FooterGridContainer>
             <FooterGridContainer>

              <FooterGridItem>
                <FooterUnorderdList>
                <FooterUnorderdListItems className="footHeadingtext">Hosting</FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>&#x20B9;entzy your home</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>&#x20B9;entzyCover for Hosts</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Explore hosting resources</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Visit our community forum</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>How to host responsibly</FooterUnorderdItemLink></FooterUnorderdListItems>

                </FooterUnorderdList>
              </FooterGridItem>
                 
              <FooterGridItem>
                <FooterUnorderdList>
                <FooterUnorderdListItems className="footHeadingtext" style={{fontSize:"24px"}}>&#x20B9;entzy</FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Newsroom</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Learn about new features</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Letter from our founders</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Careers</FooterUnorderdItemLink></FooterUnorderdListItems>
                <FooterUnorderdListItems><FooterUnorderdItemLink>Investors</FooterUnorderdItemLink></FooterUnorderdListItems>
                </FooterUnorderdList>
              </FooterGridItem>
          
              </FooterGridContainer>
            </FooterContainer>
      </>
    );
  };
  
export default Footer;