import React from 'react';
import Weblogo from '../../Assets/images/workspacelogo.png'
import * as Icons from 'react-bootstrap-icons';
import '../../Styles/Footer.css'
function Footer() {
  return (
    <div id='footer-container' className='w-100 d-flex flex-column flex-md-row justify-content-between'>
      <div id='footer-box' className='mb-0 mb-md-0 '>
        <div className='d-flex  align-content-center'>
        <img width="45px" height="40px" src={Weblogo} alt=""/> 
        <h3 className='fs-2 fw-bolder fst-italic pt-1'>Workspace</h3>
        </div>
        <p className=''>Workspace is your solution to the challenges that IT professionals and students encountered during the pandemic. We replicate the office environment, providing essential facilities at multiple locations across India. Our user-friendly website, powered by technologies like React.js and Bootstrap, offers a seamless and engaging workspace experience for efficient work and study.</p>
      </div>
      <div id='footer-box'>
        <h3>Support</h3>
        <ul className='p-0 list-unstyled d-flex flex-column gap-3'>
          <li>Help Centre</li>
          <li>Workspace Cover</li>
          <li>Combating Discrimination</li>
          <li>Cancellation Options</li>
          <li>Our COVID-19 Response</li>
          <li>Report a Concern</li>
        </ul>
      </div>
      <div id='footer-box'>
        <h3>Workspace</h3>
        <ul className='p-0 list-unstyled d-flex flex-column gap-3'>
          <li>Newsroom</li>
          <li>Learn About New Features</li>
          <li>Letter From Our Founders</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Visit Our Community Vorum</li>
        </ul>
      </div>
      <div id='footer-box'>
        <h3>Contact Us</h3>
        <ul className='p-0 list-unstyled d-flex flex-column gap-3'>
          <li><Icons.EnvelopeFill/> &nbsp;contact@workspace.com</li>
          <li><Icons.TelephoneFill/>&nbsp;+91 9423423387</li>
          <li><Icons.GeoAltFill/>&nbsp;1th floor, Alpha Acadamy, Sector 12, Sonapur Complex, Gadchiroli 442605</li>
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
