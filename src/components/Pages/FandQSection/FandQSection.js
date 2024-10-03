import React, { useRef, useState, useEffect } from "react";
import star from "../../../images/bhau-images/star-image.svg";

const FandQSection = () => {
  const [isOpen, setIsOpen] = useState({
    ramabet: false,
    games: false,
    license: false,
    depositWithdrawal: false,
    whyChoose: false,
  });

  const accordionContainerRef = useRef(null);

  const toggleAccordion = (section) => {
    setIsOpen((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      newState[section] = !prevState[section];
      return newState;
    });
  };

  const handleClickOutside = (event) => {
    if (
      accordionContainerRef.current &&
      !accordionContainerRef.current.contains(event.target)
    ) {
      setIsOpen({
        ramabet: false,
        games: false,
        license: false,
        depositWithdrawal: false,
        whyChoose: false,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container" ref={accordionContainerRef}>
      <div className="heding-sec heading-sec-custom m-2 d-flex text-center justify-content-center align-items-center">
        <img src={star} alt="" />
        <h1 className="mb-3 mt-3 ms-2 me-2 font-700">
          Frequently Asked Questions
        </h1>
        <img src={star} alt="" />
      </div>

      <div className="accordion-container container">
        <div className="accordion-container">
          <div className="accordion-section">
            <div
              className="d-flex align-items-center justify-content-between accordion-header"
              onClick={() => toggleAccordion("ramabet")}
            >
              <div className="primary-color fw-bold">What is BHAU777 ?</div>
              <div className="collapese-icon">
                <i
                  className={`fa ${
                    isOpen.ramabet ? "fa-chevron-up primary-color" : "fa-chevron-down primary-color"
                  }`}
                ></i>
              </div>
            </div>
            {isOpen.ramabet && (
              <div className="description-text">
                <br />
                BHAU777 Is A Satta Matka Gamming App Where You Can Play Games
                And Win Jackpot.
              </div>
            )}
          </div>
        </div>
        <div>
          <div>
            <div className="accordion-section">
              <div
                className="d-flex align-items-center justify-content-between accordion-header"
                onClick={() => toggleAccordion("games")}
              >
                <div className="primary-color fw-bold">
                  What games are available on BHAU777 ?
                </div>
                <div className="collapese-icon">
                  <i
                    className={`fa ${
                      isOpen.games ? "fa-chevron-up primary-color" : "fa-chevron-down primary-color"
                    }`}
                  ></i>
                </div>
              </div>

              {isOpen.games && (
                <div className="description-text" >
                  <br />
                  Popular Satta Matka Games Like Kalyan, Sridevi, Queen day,
                  Milan, Time Bazar & Rajdhani, Main bazar etc..
                </div>
              )}
            </div>

            <div className="accordion-section">
              <div
                className="d-flex align-items-center justify-content-between accordion-header"
                onClick={() => toggleAccordion("license")}
              >
                <div className="primary-color fw-bold">
                  Does BHAU777 have License ?
                </div>
                <div className="collapese-icon">
                  <i
                    className={`fa ${
                      isOpen.license ? "fa-chevron-up primary-color" : "fa-chevron-down primary-color"
                    }`}
                  ></i>
                </div>
              </div>
              {isOpen.license && (
                <div className="description-text">
                  <br />
                  Yes, BHAU777 Have Sub License In Malta. All Rights That Allows
                  To Operate Software Worldwide.
                </div>
              )}
            </div>

            <div className="accordion-section">
              <div
                className="d-flex align-items-center justify-content-between accordion-header"
                onClick={() => toggleAccordion("depositWithdrawal")}
              >
                <div className="primary-color fw-bold">
                  What is minimum Deposit and Withdrawal Amount ?
                </div>
                <div className="collapese-icon">
                  <i
                    className={`fa ${
                      isOpen.depositWithdrawal
                        ? "fa-chevron-up primary-color"
                        : "fa-chevron-down primary-color"
                    }`}
                  ></i>
                </div>
              </div>
              {isOpen.depositWithdrawal && (
                <div className="description-text">
                  <br />
                  In BHAU777, We Allow Minimum of 100.00 Rs/- Deposit and 500.00
                  Rs/- Withdrawals.
                </div>
              )}
            </div>

            <div className="accordion-section">
              <div
                className="d-flex align-items-center justify-content-between accordion-header"
                onClick={() => toggleAccordion("whyChoose")}
              >
                <div className="primary-color fw-bold">
                  Why to Choose BHAU777 Among Other Providers ?
                </div>
                <div className="collapese-icon">
                  <i
                    className={`fa ${
                      isOpen.whyChoose ? "fa-chevron-up primary-color" : "fa-chevron-down primary-color"
                    }`}
                  ></i>
                </div>
              </div>
              {isOpen.whyChoose && (
                <div className="description-text">
                  <br />
                  BHAU777 Is The Most Trusted Gaming Provider Worldwide.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FandQSection;
