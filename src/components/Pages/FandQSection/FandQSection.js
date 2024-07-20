import React, { useEffect, useState } from "react";
import star from "../../../images/Star-Icon.svg";
import Accordion from "react-bootstrap/Accordion";

const FandQSection = () => {
  // .............
  const [isOpen, setIsOpen] = useState({
    ramabet: false,
    games: false,
    license: false,
    depositWithdrawal: false,
    whyChoose: false,
  });

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-10 com-sm-12 mx-auto">
          <div className="heding-sec m-4 d-flex flex-column text-center justify-content-center align-items-center my-5">
            {/* <img src={star} alt="" /> */}
            <div className="main-title-text">
              <span className="title-text">FAQs</span>
            </div>
            <h1 className="mb-0 ms-2 me-2 font-700">
              Frequently Asked Questions
            </h1>
            {/* <img src={star} alt="" /> */}
          </div>
          <div className="accordion-container container border border-1 p-3 rounded-3">
            <div className="accordion-section ">
              <div
                className="d-flex align-items-center justify-content-between accordion-header"
                onClick={() => toggleAccordion("ramabet")}
              >
                <div className="fw-bold">What is Khatri555 ?</div>
                <div className="collapese-icon">
                  <i
                    className={`fa ${
                      isOpen.ramabet ? "fa-solid fa-minus" : "fa-solid fa-plus"
                    }`}
                  ></i>
                </div>
              </div>
              {isOpen.ramabet && (
                <div className="fw-bold">
                  <br />
                  Khatri555 Is A Satta Matka Gaming App Where You Can Play Games
                  And Win Jackpot.
                </div>
              )}
            </div>

            <div>
              <div className="accordion-section border-0">
                <div
                  className="d-flex align-items-center justify-content-between accordion-header"
                  onClick={() => toggleAccordion("games")}
                >
                  <div className="fw-bold">
                    What games are available on Khatri555 ?
                  </div>
                  <div className="collapese-icon">
                    <i
                      className={`fa ${
                        isOpen.games ? "fa-solid fa-minus" : "fa-solid fa-plus"
                      }`}
                    ></i>
                  </div>
                </div>

                {isOpen.games && (
                  <div className="fw-bold">
                    <br />
                    Popular Satta Matka Games Like Kalyan, Sridevi,
                    Milan, Time Bazar & Rajdhani, Main bazar etc..
                  </div>
                )}
              </div>
              {/* <hr /> */}
              <div className="accordion-section border-0">
                <div
                  className="d-flex align-items-center justify-content-between accordion-header"
                  onClick={() => toggleAccordion("license")}
                >
                  <div className="fw-bold">Does Khatri555 have License ?</div>
                  <div className="collapese-icon">
                    <i
                      className={`fa ${
                        isOpen.license
                          ? "fa-solid fa-minus"
                          : "fa-solid fa-plus"
                      }`}
                    ></i>
                  </div>
                </div>
                {isOpen.license && (
                  <div className="fw-bold">
                    <br />
                    Yes, Khatri555 Have Sub License In Malta. All Rights That
                    Allows To Operate Software Worldwide.
                  </div>
                )}
              </div>
              {/* <hr /> */}

              <div className="accordion-section border-0">
                <div
                  className="d-flex align-items-center justify-content-between accordion-header"
                  onClick={() => toggleAccordion("depositWithdrawal")}
                >
                  <div className="fw-bold">
                    What is minimum Deposit and Withdrawal Amount ?
                  </div>
                  <div className="collapese-icon">
                    <i
                      className={`fa ${
                        isOpen.depositWithdrawal
                          ? "fa-solid fa-minus"
                          : "fa-solid fa-plus"
                      }`}
                    ></i>
                  </div>
                </div>
                {isOpen.depositWithdrawal && (
                  <div className="fw-bold">
                    <br />
                    In Khatri555, We Allow Minimum of 100.00 Rs/- Deposit and
                    500.00 Rs/- Withdrawals.
                  </div>
                )}
              </div>

              <div className="accordion-section border-0">
                <div
                  className="d-flex align-items-center justify-content-between accordion-header"
                  onClick={() => toggleAccordion("whyChoose")}
                >
                  <div className="fw-bold">
                    Why to Choose Khatri555 Among Other Providers ?
                  </div>
                  <div className="collapese-icon">
                    <i
                      className={`fa ${
                        isOpen.whyChoose
                          ? "fa-solid fa-minus"
                          : "fa-solid fa-plus"
                      }`}
                    ></i>
                  </div>
                </div>
                {isOpen.whyChoose && (
                  <div className="fw-bold">
                    <br />
                    Khatri555 Is The Most Trusted Gaming Provider Worldwide.
                  </div>
                )}
              </div>
              {/* <hr /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FandQSection;
