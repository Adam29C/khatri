import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../../images/bhau-images/star-image.svg";
import { GET_CONTACT } from "../../service/admin.service";

const Section3 = () => {
  const [getData, setgetData] = useState([]);

  const getResponseData = async () => {
    const res = await GET_CONTACT();
    setgetData(res?.data?.[0]);
  };

  useEffect(() => {
    getResponseData();
  }, []);

  useEffect(() => {}, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,

    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {},
  };
  return (
    <>
      <div className="container ">
        <div className="row contact-number-main ">
          <div className="col-12 col-lg-6 ">
            <h4 className="primary-color">Connect with phone call</h4>
            <h1 className="display-5 fw-bolder primary-color roboto-light font-size-2rem">
              {getData && getData.number}
            </h1>
          </div>
          <div className="col-12 col-lg-6">
            <div className=" contact-btn-main gap-3 contact-btn">
              <button className="btn-hover-effect contact-button">
                <a
                  href={`tel:${getData && getData.number}`}
                  className="text-decoration-none text-white"
                >
                  <i className="fa fa-phone me-2" aria-hidden="true"></i>Call
                  Now
                </a>
              </button>
              <button className="wbtn-hover-effect contact-button-whatsapp ">
                <a
                  href={`https://wa.me/+${getData && getData.number}`}
                  className="text-decoration-none text-white"
                >
                  <i className="fa fa-whatsapp me-2" aria-hidden="true"></i>
                  WhatsApp
                </a>
              </button>
            </div>
          </div>
        </div>


        <div className="winner-container">
          <div className="heding-sec heading-sec-custom m-2 d-flex text-center justify-content-center align-items-center">
            <img src={star} alt="" />
            <h1 className="mb-0 ms-2 me-2 font-700">Today's Top Winners</h1>
            <img src={star} alt="" />
          </div>
          <Slider {...settings}>
            <div>
              <div className="custom-card custom-card-padding card-design">
                <h4 className="">Amit</h4>
                <h4 className="font-700 ">₹61,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card card-design">
                <h4 className="">Priya</h4>
                <h4 className="font-700 ">₹35,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card card-design">
                <h4 className="">Himanshu</h4>
                <h4 className="font-700 ">₹51,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card card-design">
                <h4 className="">Garima</h4>
                <h4 className="font-700 ">₹25,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card card-design">
                <h4 className="">Yash</h4>
                <h4 className="font-700 ">₹45,200</h4>
              </div>
            </div>
            <div>
              <div className="custom-card card-design">
                <h4 className="">Ajit</h4>
                <h4 className="font-700 ">₹45,200</h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      
    </>
  );
};

export default Section3;
