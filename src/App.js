import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wraper from "./components/Wraper";
import "./App.css";
import "./components/assets/css/global.css";
import "./components/assets/css/responsive.css";
import Jodi_Chart from "./components/games/AvailableGames/Jodi_Chart";
import Pana_Chart from "./components/games/AvailableGames/Pana_Chart";
import Charts from "./components/Pages/Charts/ChartsWraper";
import StartLineGames from "./components/games/StarLine/StartLineGames";
import AndarBaharChart from "./components/games/AndarBahar/AndarBaharChart";
import TermsCondition from "./components/Pages/TermsCondition/TermsCondition";
import AboutGames from "./components/Pages/AboutGames/AboutGames";
import RouteTitleUpdater from "./components/Helpers/RouteTitleUpdater";

const App = () => {
  return (
    <>
     <Router>
      <RouteTitleUpdater/>
      <Routes>
        <Route path="/" element={<Wraper />} />
        <Route path="/charts/" element={<Charts />} />
        <Route path="/starline/:title" element={<StartLineGames />} />
        <Route path="/andarbahar/:id" element={<AndarBaharChart />} />
        <Route path="/pana-chart/:title/:Chart" element={<Pana_Chart />} />
        <Route path="/jodi-chart/:title/:Chart" element={<Jodi_Chart />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/how-to-play" element={<AboutGames />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
