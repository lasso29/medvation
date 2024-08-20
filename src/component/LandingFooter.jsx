import React from "react";
import logo from "../assets/images/medvation-logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter,  FaSquareInstagram } from "react-icons/fa6";


const LandingFooter = () => {
  return (
    <>
  <footer className="container landing-footer p-4 d-flex flex-column flex-md-row justify-content-between align-items-start mt-4">
  <div className="col-12 col-md-3 mb-4 mb-md-0 text-center text-md-start">
    <img src={logo} alt="Logo" className="w-50 w-md-25 mb-3" />
    <p>Your trusted source for medical education, resources, and patient care.</p>
    <TiSocialFacebook className="social-media-icon fs-2" style={{color:'#1463F3'}} />
    <TiSocialLinkedin className="social-media-icon fs-2" style={{color:'#1463F3'}} />
    <FaYoutube className="social-media-icon fs-2" style={{color:'#1463F3'}} />
    <FaSquareXTwitter className="social-media-icon fs-2" style={{color:'#1463F3'}} />
    <FaSquareInstagram className="social-media-icon fs-2" style={{color:'#1463F3'}} />
  </div>

  <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
    <h4>Quick Links</h4>
    <ul className="list-unstyled">
      <li><a href="#home" className="text-decoration-none text-reset">Home</a></li>
      <li><a href="#services" className="text-decoration-none text-reset">Services</a></li>
      <li><a href="#about" className="text-decoration-none text-reset">About Us</a></li>
      <li><a href="#faq" className="text-decoration-none text-reset">FAQ</a></li>
    </ul>
  </div>

  <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
    <h4>Information</h4>
    <ul className="list-unstyled">
      <li><a href="#news" className="text-decoration-none text-reset">News & Features</a></li>
      <li><a href="#appointment" className="text-decoration-none text-reset">Appointment</a></li>
      <li><a href="#account" className="text-decoration-none text-reset">Account</a></li>
      <li><a href="#feedback" className="text-decoration-none text-reset">Website Feedback</a></li>
    </ul>
  </div>

  <div className="col-12 col-md-3 text-center text-md-start">
    <h4>Contact</h4>
    <p className="lh-sm mb-1"><b>Address:</b> Your Address Here</p>
    <p className="lh-sm mb-1"><b>Email:</b> effectualmedia22@gmail.com</p>
    <p className="lh-sm"><b>Phone:</b> +234 901 328 4694</p>
  </div>
</footer>

<div className="site-author text-center py-3" style={{ backgroundColor: '#f8f9fa' }}>
  <p className="mb-0">Copyright 2024. Design by Ayomide Olugbile</p>
</div>


    </>
  );
};

export default LandingFooter;
