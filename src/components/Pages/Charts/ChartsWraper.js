import React, { useEffect, useState } from "react";

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
import { ClockLoader } from "react-spinners";

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
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <>
      <CharPageImage>
        <div className="container chart-container">
          {loading ? (
            <div className="loading-chart">
              <ClockLoader color="#ffff" size={50} />
            </div>
          ) : (
            <div className="row chart-row">
              <Jodi_Chart title="Jodi Chart" data={getChart} link="jodi" />
              <Pana_Chart title="Pana Chart" data={getChart} link="pana" />
              <Shree_Starline
                title="Queen Starline"
                data={getStarline}
                link="starline"
              />
              <Shree_Jackpot
                title="Queen Jackpot"
                data={getJackpot}
                link="jackpot"
              />
            </div>
          )}
        </div>
      </CharPageImage>
    </>
  );
};

export default Charts;
