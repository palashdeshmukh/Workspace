import React from "react";
import { CopywriteContainer,CopywriteBoxContainer,CopywriteItemContainer,CopywriteUl,CopywriteLiItems,CopywriteListLink } from "../../Styles/Copywrite";
import * as Icon from 'react-bootstrap-icons';
const Copywrite=()=>{
    const firsListItems=[
        "\u00A9 2023 \u20B9entzyInc.All rights reserved",
        "Privacy",
        "Terms",
        "Site Map"
    ];

    const secondListItems=[
        <Icon.Globe/>,
        "English(IN)",
        "\u20B9 INR",
        <Icon.Facebook/>,
        <Icon.Twitter/>,
        <Icon.Instagram/>
    ]
    return(
        <>
       <CopywriteContainer>
       <CopywriteBoxContainer $direct className="copywritetext-content">
       <CopywriteItemContainer>
       <CopywriteUl>
       {firsListItems.map((item,index)=>(
       <CopywriteLiItems key={index}><CopywriteListLink>{item}</CopywriteListLink></CopywriteLiItems>
       ))}
       </CopywriteUl>
       </CopywriteItemContainer>
      </CopywriteBoxContainer>
       {/* This is the Second Container */}
       <CopywriteBoxContainer><CopywriteItemContainer $copywriteboxSize>
       <CopywriteUl className="box2">
       {secondListItems.map((item,index)=>(
       <CopywriteLiItems key={index}><CopywriteListLink>{item}</CopywriteListLink></CopywriteLiItems>
       ))}
       </CopywriteUl>
       </CopywriteItemContainer></CopywriteBoxContainer>
       </CopywriteContainer>
       </>
    )
};

export default Copywrite;