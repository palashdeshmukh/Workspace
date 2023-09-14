import React from 'react'
import Marquee from "react-fast-marquee";


function MarqueeCompany () {
  return (
    <>
    <Marquee>
    <div style={{backgroundColor:"white"}} className='d-flex flex-row gap-4 pt-2 pb-2 '>
    <div style={{height:"60px",width:"170px"}} className='logo-holder'>
    <img className="img-fluid" src={require("../Assets/logo/24_OLA-Electric.jpg")} alt="logo"/>
    </div>

    <div  style={{height:"60px",width:"170px"}}  className='logo-holder'>
    <img className="img-fluid" src={require("../Assets/logo/25_Tokopedia.jpg")} alt="logo"/>
    </div>

    <div  style={{height:"60px",width:"170px"}}  className='logo-holder'>
    <img className="img-fluid" src={require("../Assets/logo/26_Arcesium.jpg")} alt="logo"/>
    </div>

    <div  style={{height:"60px",width:"170px"}}  className='logo-holder'>
    <img className="img-fluid" src={require("../Assets/logo/27_IDFC-First-Bank.jpg")} alt="logo"/>
    </div>

    <div  style={{height:"60px",width:"165px"}}  className='logo-holder'>
    <img className="img-fluid" src={require("../Assets/logo/28_Optum.jpg")} alt="logo"/>
    </div>

    <div  style={{height:"60px",width:"1px"}}  className='logo-holder'>
    <img className="img-fluid" src={require("../Assets/logo/29_Vmock.jpg")} alt="logo"/>
    </div>

    <div  style={{height:"60px",width:"170px"}}  className='logo-holder'>
    <img className="img-fluid" src={require("../Assets/logo/31_Man-Matters.jpg")} alt="logo"/>
    </div>

    <div  style={{height:"60px",width:"170px"}}  className='logo-holder'>
    <img className="img-fluid" src={require("../Assets/logo/32_Leadsquared.jpg")} alt="logo"/>
    </div>

    <div  style={{height:"60px",width:"170px"}}  className='logo-holder'>
    <img className="img-fluid" src={require("../Assets/logo/33_Payglocal.jpg")} alt="logo"/>
    </div>

    <div  style={{height:"60px",width:"165px"}}  className='logo-holder'>
    <img className="img-fluid" src={require("../Assets/logo/35_Adda247.jpg")} alt="logo"/>
    </div>
    <div  style={{height:"60px",width:"165px"}}  className='logo-holder'>
    <img className="img-fluid" src={require("../Assets/logo/28_Optum.jpg")} alt="logo"/>
    </div>
    </div>

    </Marquee>
    </>
  )
}

export default MarqueeCompany;