import { GET_ALL_GAMES_RESULT } from "../../service/admin.service";
import Navbar from "../../Pages/Navbar/Navbar";
import Footer from "../../Pages/Footer/Footer";
import { nameRejext } from "../../Helpers/StringRejex";

import MadhurDay from "../../Charts/PanaCharts/MadhurDay";
import MadhurNight from "../../Charts/PanaCharts/MadhurNight";

import MilanDay from "../../Charts/PanaCharts/MilanDay";
import MilanNight from "../../Charts/PanaCharts/MilanNight";

import RajdhaniDay from "../../Charts/PanaCharts/RajdhaniDay";
import RajdhaniNight from "../../Charts/PanaCharts/RajdhaniNight";

import Kalyan from "../../Charts/PanaCharts/Kalyan";

import TimeBazar from "../../Charts/PanaCharts/TimeBazar";
import MainBazar from "../../Charts/PanaCharts/MainBazar";

import ShreeDevi from "../../Charts/PanaCharts/ShreeDevi";
import ShreeDeviNight from "../../Charts/PanaCharts/ShreeDeviNight";
import MayaMorning from "../../Charts/PanaCharts/MayaMorning";

import QUEENDAY from "../../Charts/PanaCharts/QUEENDAY";
import QUEENMORNING from "../../Charts/PanaCharts/QUEENMORNING";
import QUEENNIGHT from "../../Charts/PanaCharts/QUEENNIGHT";

import { GetAllCharts } from "../../Helpers/GetCharts";
import { PagesIndex } from "../../Pages/PagesIndex";

const Pana_Chart = () => {
  const navigate = PagesIndex.useNavigate();
  const location = PagesIndex.useLocation();

  const [getData, setgetData] = PagesIndex.useState([]);

  const handleClick = () => {
    const targetElement = document.getElementById("scroll-down");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickUp = () => {
    const targetElement = document.getElementById("scroll-up");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getResponseData = async () => {
    const req = nameRejext(location.state.title);
    const res = await GetAllCharts(GET_ALL_GAMES_RESULT, req);
    setgetData(res);
  };
  PagesIndex.useEffect(() => {
    getResponseData();
  }, []);

  return (
    <>
      <div className="chart-home-page">
        <div id="scroll-up"></div>
        <Navbar />

        <div className="container-fluid ">
          <div className="row">
            <div className="text-center col-xl-12 col-q-12 col-md-12 col-sm-12 chart-header-table ">
              <div className="pt-110  text-alignment">
                <h2 className="chart-header-font">
                  <strong className="color-white">
                    {location.state.title}
                  </strong>
                </h2>

                <p className="color-white">
                  {location.state.title} Pana Chart Satta Matka Record Old
                  History Historical Data Bracket Results Chart Online Live Book
                  Digits Numbers
                </p>
              </div>
              <div className="d-flex alighn-item-center justify-content-center">
                <button
                  className="scroll-btn my-3"
                  onClick={handleClick}
                  id="scroll-down-button"
                >
                  Scroll Down
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row justify-content-center ">
            <div className="p-0 text-center d-flex justify-content-center   col-xl-12 col-q-12 col-md-12 col-sm-12">
              <div className="table-responsive  text-center col-xl-8 col-lg-12 col-md-12 col-sm-12 ">
                {nameRejext(location.state.title) ===
                nameRejext("MADHUR DAY") ? (
                  <MadhurDay chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("MadhurNight") ? (
                  <MadhurNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("MILAN DAY") ? (
                  <MilanDay chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("MILAN NIGHT") ? (
                  <MilanNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("RAJDHANI DAY") ? (
                  <RajdhaniDay chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("RAJDHANI NIGHT") ? (
                  <RajdhaniNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("KALYAN") ? (
                  <Kalyan chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("TIME BAZAR") ? (
                  <TimeBazar chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("MAIN BAZAR") ? (
                  <MainBazar chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("SRIDEVI") ? (
                  <ShreeDevi chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("sridevinight") ? (
                  <ShreeDeviNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("MayaMorning") ? (
                  <MayaMorning chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("QUEENNIGHT") ? (
                  <QUEENNIGHT chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("QUEENMORNING") ? (
                  <QUEENMORNING chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("QUEENDAY") ? (
                  <QUEENDAY chartData={getData.data} />
                ) : (
                  ""
                )}

                <button
                  className=" btn  rounded-pill back-btn "
                  onClick={() => navigate(-1)}
                  id="scroll-down-button"
                >
                  Back
                </button>
                <button
                  className=" btn rounded-pill back-btn "
                  onClick={handleClickUp}
                  id="scroll-down-button"
                >
                  Scroll to Top
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <div id="scroll-down"></div>
      </div>
    </>
  );
};

export default Pana_Chart;
