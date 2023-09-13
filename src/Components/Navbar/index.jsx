import React from "react";
import * as Icon from "react-bootstrap-icons"
import {menuItems,ItemContainer,ItemList,BarContainer,ItemLink,NavbarContainer,NavContainerBox,NavContainerBoxOne} from "../../Styles/Navbar";
import Logo from "../MainLogo";


const Navbar=()=>{   

  
    const handleResize = () => {
        const bar = document.getElementsByClassName("downbar")[0];
        
        if (window.matchMedia("(max-width: 768px)").matches) {
          if (bar.style.display === "none" || bar.style.display === "") {
            bar.style.display = "block";
          } else {
            bar.style.display = "none";
          }
        } else {
          bar.style.display = "none";
        }
      };
  
return(
        <NavbarContainer>
        <NavContainerBox><Logo/><BarContainer onClick={handleResize}><Icon.List/></BarContainer></NavContainerBox>
        <NavContainerBoxOne className="downbar">
    <ItemContainer>
    {menuItems.map((item,index)=>(
    <ItemList key={index}>
    <ItemLink to={item.to} relative="path">{item.label}</ItemLink>
    </ItemList>
     ))}
    </ItemContainer>
    </NavContainerBoxOne>

    </NavbarContainer>

    )
};

export default Navbar;