import React, { useState } from "react";
import logo from '../assets/images/medvation-logo.png'
import { Link } from "react-router-dom";
const LandingNavBar = () => {
    const [pageMode, setPageMode] = useState('home')
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
        <div className="container-fluid">
            <img src={logo}alt=""  className="medvation-logo"/>
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${pageMode=="home"?"fw-semibold":""}`}aria-current="page" href="#" onClick={()=>{setPageMode('home')}} style={{color:pageMode=="home"?"#1463F3":null}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pageMode=="about"?"fw-semibold":""}`} href="#about" onClick={()=>{setPageMode('about')}} style={{color:pageMode=="about"?"#1463F3":null}}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pageMode=="service"?"fw-bold":""}`} href="#service" onClick={()=>{setPageMode('service')}} style={{color:pageMode=="service"?"#1463F3":null}}>
                  Service
                </a>
              </li>
              <li className="nav-item">
              <a className={`nav-link ${pageMode=="news"?"fw-semibold":""}`} href="#news" onClick={()=>{setPageMode('news')}} style={{color:pageMode=="news"?"#1463F3":null}}>
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pageMode=="faq"?"fw-semibold":""}`} href="#faq" onClick={()=>{setPageMode('faq')}} style={{color:pageMode=="faq"?"#1463F3":null}}>
                  FAQ
                </a>
              </li>
            </ul>
            <form className="d-flex gap-2" role="search">
              <Link to="/register">
              <button
                className="btn text-white"
                style={{ backgroundColor: "#040023 " }}
                >
                Sign-up
              </button>
                </Link>

                <Link to="/login">
                
              <button
                className="btn text-white"
                style={{ backgroundColor: "#1463F3 " }}
                type="submit"
                >
                Sign In
              </button>
                </Link>
            </form>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default LandingNavBar;
