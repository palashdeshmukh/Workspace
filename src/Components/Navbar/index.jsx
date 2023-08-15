import React from "react";
import {menuItems,ItemContainer,ItemList,BarContainer,ItemLink,NavbarContainer,NavContainerBox,NavContainerBoxOne} from "../../Styles/Navbar";

 
const Navbar=()=>{   
return(
        <NavbarContainer>
        <NavContainerBox><BarContainer></BarContainer></NavContainerBox>
        <NavContainerBoxOne>
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