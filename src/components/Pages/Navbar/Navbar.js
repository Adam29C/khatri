import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { downloadAPK } from "../../Helpers/DownloadAPK";
import headerLog from "../../../images/khatri_new_logo.svg";
import HeaderSvg from "../../Helpers/HeaderSvg";
import { nameRejext } from "../../Helpers/StringRejex";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapseRef = useRef(null);

  // const toggleNavbar = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  const handleClickOutside = (event) => {
    if (collapseRef.current && !collapseRef.current.contains(event.target)) {
      setIsCollapsed(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="app-container">
        <div className="banner-section ">
          <div className="header-container">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid header-content-main">
                <Logo />
                <button
                  class="navbar-toggler navbar-toggler-btn custom-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                {/* Conditionally render NavigationLinks and DownloadButton based on isCollapsed state */}
                <div
                  className={`collapse navbar-collapse custome-nav  ${
                    isCollapsed ? "" : "show"
                  }`}
                  id="navbarSupportedContent"
                  ref={collapseRef}
                >
                  <div className="navigation-links">
                    {/* <NavigationLinks /> */}
                  </div>

                  <div className="navigation-links responsive_Nav">
                    <NavigationLinks />
                    <div className="download-btn ">
                      <DownloadButton />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

const Logo = () => {
  return (
    <Link className="nav-link  active" aria-current="page" to="/">
      <img className="logo_navbar img-fluid" src={headerLog} alt="Logo" />
    </Link>
  );
};

const NavigationLinks = () => {
  const location = useLocation();

  useEffect(() => {
    const getId = document.getElementById("Title");

    console.log("Current Path:", location.pathname);

    if (location.pathname == "/") {
      getId.innerText =
        "Khatri555 | Official & No.1 Online Matka Application in India";
    } else {
      getId.innerText = `Khatri555 | ${location.pathname
        .slice(1, location.pathname.length)
        .toLocaleUpperCase()}`;
    }
  }, [location]);
  return (
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item ">
        <Link
          className="nav-link d-flex flex-column"
          aria-current="page"
          to="/"
        >
          Home
          <HeaderSvg />
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link d-flex flex-column" to="/about-us">
          About Us
          <HeaderSvg />
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link d-flex flex-column" to="/charts">
          Charts
          <HeaderSvg />
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link d-flex flex-column" to="/how-to-play">
          How To Play
          <HeaderSvg />
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link d-flex flex-column" to="/terms-conditions">
          Terms & Condition
          <HeaderSvg />
        </Link>
      </li>
    </ul>
  );
};

const download = async () => {
  await downloadAPK();
};

const DownloadButton = () => {
  return (
    <button onClick={download}>
      Get Free App <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
  );
};

export default Navbar;
