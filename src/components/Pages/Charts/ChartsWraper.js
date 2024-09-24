import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  GET_ALL_GAMESLIST,
  GET_ALL_JACKPOT_GAME_CHART,
  GET_ALL_STARTLINE_GAMES_CHART,
} from "../../service/admin.service";
import Jodi_Chart from "../Charts/JodiChart";
import Pana_Chart from "../Charts/PanaChart";
import Shree_Jackpot from "../Charts/Shree_Jackpot";
import Shree_Starline from "../Charts/Shree_Starline";
import CharPageImage from "../../Helpers/CharPageImage";
import { BounceLoader, ClockLoader } from "react-spinners";

const Charts = () => {
  const [getChart, setgetChartData] = useState([]);
  const [getStarline, setgetStarlineData] = useState([]);
  const [getJackpot, setgetJackpotData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getResponseData = async () => {
try {
  const res = await GET_ALL_GAMESLIST();
  setgetChartData(res.data);

  const res1 = await GET_ALL_STARTLINE_GAMES_CHART();
  setgetStarlineData(res1.data);

  const res2 = await GET_ALL_JACKPOT_GAME_CHART();
  setgetJackpotData(res2.data);
} catch (error) {
  console.error("Error fetching data:", error);

}finally {
  setLoading(false); 
  
}
  };
  useEffect(() => {
    getResponseData();
  }, []);




  return (
    <>
    
<CharPageImage>
  {/* <div className="custom-background-container"></div> */}
  <div className="container chart-container">
  {loading ? (
      <div className="loading-chart"><ClockLoader
      color="#ffff"
      size={50}
    /></div>  // You can replace this with a loading spinner or any other indicator
    ) : (    <div className="row chart-row">
      <Jodi_Chart title="Jodi Chart" data={getChart} link="jodi" />
      <Pana_Chart title="Pana Chart" data={getChart} link="pana" />
      <Shree_Starline title="Shree Starline" data={getStarline} link="starline" />
      <Shree_Jackpot title="Shree Jackpot" data={getJackpot} link="jackpot" />
    </div>)
}
  </div>
 
  </CharPageImage>
    </>
  );
};

export default Charts;
