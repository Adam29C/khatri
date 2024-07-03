import React, { useEffect, useState } from "react";
import { GET_ALL_GAMERATES } from "../../service/admin.service";
import doller from "../../../images/doller.png";
import infinity from "../../../images/infinity.png";

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
        <div className="heding-sec heading-sec-custom m-4 d-flex text-center justify-content-center align-items-center">
          {/* <img src={doller} alt="" /> */}
          <h1 className="mb-0 ms-2 me-2 font-700">We Have Best Game Rates For You</h1>
          {/* <img src={doller} alt="" /> */}
        </div>

        <div className="row">
          {getData.map((items, index) => (
            <div
              key={index}
              className="Card_Size rounded-3 border border-1 p-3 m-1"
            >
              <div className="d-flex align-items-center">
                <img src={infinity} alt="" className="mx-2" />
                <h5 className="mx-1 ">{items.gameName}</h5>
              </div>
              <div className="d-flex">
                <h4 className="mx-5 ps-2 primary-color">
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
