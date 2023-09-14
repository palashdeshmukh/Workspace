import React from 'react';
import Logo from '../MainLogo';
import * as Icons from 'react-bootstrap-icons';
import '../../Styles/Footer.css'
function Footer() {
  return (
    <div id='footer-container' className='w-100 p-1 d-flex flex-column flex-md-row justify-content-between'>
      <div id='footer-box' className='w-100 mb-0 mb-md-0 '>
        <Logo />
        <p>Workspace is your solution to the challenges that IT professionals and students encountered during the pandemic. We replicate the office environment, providing essential facilities at multiple locations across India. Our user-friendly website, powered by technologies like React.js and Bootstrap, offers a seamless and engaging workspace experience for efficient work and study.</p>
      </div>
      <div id='footer-box'>
        <h3>EDUCATION</h3>
        <ul className='p-0 list-unstyled d-flex flex-column gap-3'>
          <li>MERN FULL STACK DEVELOPMENT</li>
          <li>JAVA FULL STACK DEVELOPMENT</li>
          <li>DATA ANALYTICS</li>
          <li>SCHOLARSHIP TEST</li>
          <li>HIRE FROM US</li>
          <li>SUCCESS STORIES</li>
        </ul>
      </div>
      <div id='footer-box'>
        <h3>EDUCATION</h3>
        <ul className='p-0 list-unstyled d-flex flex-column gap-3'>
          <li>MERN FULL STACK DEVELOPMENT</li>
          <li>JAVA FULL STACK DEVELOPMENT</li>
          <li>DATA ANALYTICS</li>
          <li>SCHOLARSHIP TEST</li>
          <li>HIRE FROM US</li>
          <li>SUCCESS STORIES</li>
        </ul>
      </div>
      <div id='footer-box'>
        <h3>CONTACT US</h3>
        <ul className='p-0 list-unstyled d-flex flex-column gap-3'>
          <li>contact@workspace.com</li>
          <li>+91 85955563221</li>
          <li>4th floor, 91SpringBorad, Sector 44, Gurugram, Haryana 122003</li>
          <li>
            <ul className='d-flex flex-row justify-content-between p-0 list-unstyled'>
              <li><Icons.Instagram style={{ color: "#E1306C" }} className='fs-3' /></li>
              <li><Icons.Youtube style={{ color: " #c4302b" }} className='fs-3' /></li>
              <li><Icons.Linkedin style={{ color: "#0A66C2" }} className='fs-3' /></li>
              <li><Icons.Facebook style={{ color: "#3b5998" }} className='fs-3' /></li>
              <li><Icons.Whatsapp style={{ color: "#25D366" }} className='fs-3' /></li>
            </ul>
          </li>
          <li><button type="button" class="btn btn-primary w-100"> Request a Call</button>
</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
