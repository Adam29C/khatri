import React, { useEffect, useState } from "react";
import "../../assets/css/Herosection.css";
import { GET_CONTACT } from "../../service/admin.service";
import { downloadAPK } from "../../Helpers/DownloadAPK";

const Section2 = () => {
  const [getData, setgetData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getResponseData = async () => {
    const res = await GET_CONTACT();
    setgetData(res.data[0]);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isIPhoneXR = windowWidth === 414 || windowWidth === 896;

  const download = async () => {
    await downloadAPK();
  };

  return (
    <>
      <div className="container">
        <div className="banner-container">
          <div className="row main-contain-row">
            <div className="col-lg-12 hero-sec-left">
              <div className="banner-left">
                <div className="button-sec">
                  <div className="row">
                    <div className="col-12">
                      <div className="main-title-text">
                        <span className="title-text">Welcome To Khatri555</span>
                      </div>
                      <div
                        className={`banner-text-section ${
                          isIPhoneXR ? "d-flex flex-column" : ""
                        }`}
                      >
                        <h1 className="h1-fw-700">Play Big, Win Big</h1>
                        <h1 className="h1-fw-700">Business Of Faith </h1>
                        <h1 className="h1-fw-700">With Confidence </h1>
                      </div>
                      {/* <div className="col-12 col-lg-6"> */}
                      <div className="d-flex gap-3 mt-5 main-btn">
                        <button className="main-page-btn">
                          <a
                            href={`tel:+91${getData && getData.number}`}
                            className="text-decoration-none main-btn-a"
                          >
                            <i
                              className="fa fa-phone me-2"
                              aria-hidden="true"
                            ></i>
                            Call Now
                          </a>
                        </button>
                        <button className="main-page-btn">
                          <a
                            // href="https://wa.me/+919819508829"
                            href={`https://wa.me/+91${
                              getData && getData.number
                            }`}
                            className="text-decoration-none main-btn-a"
                          >
                            <i
                              className="fa fa-whatsapp me-2"
                              aria-hidden="true"
                            ></i>
                            WhatsApp
                          </a>
                        </button>
                        
                      </div>
                      <div className="mt-4 ms-4">
                          <h4 className="color-primary ">
                            Connect with phone call
                          </h4>
                          <a
                            href={`tel:+91${getData && getData.number}`}
                            className="text-decoration-none main-btn-a"
                          >
                          <h1 className="fw-bolder color-primary roboto-light font-size-2rem">
                            +91 {getData && getData.number}
                          </h1>
                          </a>

                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="download-now move-color d-flex justify-content-center align-items-center mt(-5)">
            <i className="fa-2x fa fa-download mr-15px" aria-hidden="true"></i>
            <h1
              className="mb-0 font-400 curser-pointer"
              onClick={() => download()}
            >
              Download App
            </h1>
          </div>
        </div>
      </div>
      <div
        className="contact-container hero-section-container"
        // style={{
        //   maxWidth: "100%",
        //   marginLeft: "auto",
        //   marginRight: "auto",
        //   paddingLeft: "calc(var(--bs-gutter-x)* .5)",
        //   paddingRight: "calc(var(--bs-gutter-x)* .5)",
        // }}
      >
        {/* <div
          className="row d-flex align-items-center p-3 p-lg-5 margin-bottom-0px"
  
        >
          <div className="col-12 col-lg-6 text-center">
            <h4 className="color-primary">Connect with phone call</h4>
            <h1
              className="display-5 fw-bolder color-primary roboto-light font-size-2rem"
         
            >
              +91 {getData && getData.number}
            </h1>
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex justify-content-center align-items-center gap-3 contact-btn">
              <button className="contact-button">
                <a
                  href={`tel:${getData && getData.number}`}
                  className="text-decoration-none text-white"
                >
                  <i className="fa fa-phone me-2" aria-hidden="true"></i>Call
                  Now
                </a>
              </button>
              <button
                className="contact-button contact-btn-backgcolor"
                // style={{ backgroundColor: "rgb(37, 211, 102)" }}
              >
                <a
                  // href="https://wa.me/+919819508829"
                  href={`https://wa.me/+${getData && getData.number}`}
                  className="text-decoration-none text-white"
                >
                  <i className="fa fa-whatsapp me-2" aria-hidden="true"></i>
                  WhatsApp
                </a>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Section2;
