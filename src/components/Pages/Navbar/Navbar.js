
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { downloadAPK } from "../../Helpers/DownloadAPK";
import headerLogo from "../../../images/bhau-images/Logo for green background.svg";


const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const collapseRef = useRef(null);
  const toggleButtonRef = useRef(null);


const handleClickOutside = (event) => {
  if (
    collapseRef.current &&
    !collapseRef.current.contains(event.target) &&
    toggleButtonRef.current &&
    !toggleButtonRef.current.contains(event.target)
  ) {
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
                  aria-expanded={!isCollapsed} 
                  aria-label="Toggle navigation"
                  onClick={() => setIsCollapsed(!isCollapsed)} 
                  ref={toggleButtonRef}
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse custome-nav  ${
                    isCollapsed ? "" : "show"
                  }`}
                  id="navbarSupportedContent"
                  ref={collapseRef}
                >
                  <div className="navigation-links"></div>

                  <div className="navigation-links ">
                    <NavigationLinks />
                  </div>

                  <div className="download-btn ">
                    <DownloadButton />
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
      <img
        className="logo_navbar img-fluid"
        src={headerLogo}
        alt="Logo"
/>
    </Link>
  );
};

const NavigationLinks = () => {
  return (
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-0">
      <li className="nav-item ">
        <Link
          className="nav-link link-25 d-flex flex-column"
          aria-current="page"
          to="/"
        >
          Home
        
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link link-25 d-flex flex-column" to="/charts">
          Charts
          
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link link-25 d-flex flex-column" to="/how-to-play">
          How To Play
         
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link d-flex link-25 flex-column" to="/terms-conditions">
          Terms & Condition
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
      Get Free App <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
    </button>
  );
};
export default Navbar;
