import React, { useEffect, useState } from "react";
import { GET_ALL_GAMERATES } from "../../service/admin.service";
import doller from "../../../images/bhau-images/doller.png";


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
    <div className="game-rate-container p-3">
      <div className="heding-sec heading-sec-custom m-4 d-flex text-center justify-content-center align-items-center">
        <img
          src={doller}
          alt=""
        />
        <h1 className="mb-0 ms-2 me-2 font-700">Game Rates</h1>
        <img
          src={doller}
          alt=""
        />
      </div>
      <div className="row game-rate-card-main g-4   " >
        {getData.map((items, index) => (
          <div key={index}  className="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12 game-rate me-2">
            <div 
        
              className="game-rate-card p-2"
            >
              <h4 className="primary-color"><i class="fa fa-hand-o-right margin-r-10" aria-hidden="true"></i>
              {items.gameName}</h4>
              <h4 className="font-400"> 1 RS KA {items.gamePrice}</h4>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  </div>
  );
};

export default GameRateSection;
