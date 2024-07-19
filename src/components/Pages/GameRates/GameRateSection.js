import React, { useEffect, useState } from "react";
import { GET_ALL_GAMERATES } from "../../service/admin.service";
import doller from "../../../images/doller.png";
import infinity from "../../../images/infinit.svg";

const GameRateSection = () => {
  const [getData, setgetData] = useState([]);

  const getResponseData = async () => {
    const res = await GET_ALL_GAMERATES();
    setgetData(res.data);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <div className="container">
      {/* <div className="row">
        <div className="col-xl-3 col-sm-12 rounded-3 border border-1 p-3 m-1">
          <div className="card" >
            <img
              className="card-img-top"
              src=".../100px180/"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="game-rate-container">
        <div className="-custom m-4 d-flex flex-column text-center justify-content-center align-items-center">
          {/* <img src={doller} alt="" /> */}
          <div className="main-title-text">
            <span className="title-text">Game Rates</span>
          </div>
          <h1 className="mb-0 ms-2 me-2 font-700">
            We Have Best Game Rates <br /> For You
          </h1>
          {/* <img src={doller} alt="" /> */}
        </div>

        <div className="row">
          {getData?.map((items, index) => (
            <div
              key={index}
              className="Card_Size rounded-3 border border-1 p-2 m-1"
            >
              <div className="d-flex align-items-center">
                <img src={infinity} alt="" className="mx-2 img-hover-rotate img-hover-rotate " />
                <h5 className="mx-1 heading">{items.gameName}</h5>
              </div>
              <div className="d-flex">
                <h4 className="ms-5 ps-2 primary-color sub_heading">
                  1 RS KA {items.gamePrice}
                </h4>
              </div>
            </div>
          ))}
        </div>
        {/* <Section4 /> */}
      </div>
    </div>
  );
};

export default GameRateSection;
