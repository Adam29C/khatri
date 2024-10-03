import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cardImage from "../../images/bhau-images/card-top-image.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { GET_ALL_GAMES } from "../service/admin.service";
import star from "../../images/bhau-images/star-image.svg";
import { downloadAPK } from "../Helpers/DownloadAPK";
import CardModel from "../Helpers/CardModel";

const Section4 = ({ GameData, title, showPana }) => {

  const [AppUrl, setAppUrl] = useState("");
  const [ModalData, setModalData] = useState([]);
  const [show, setShow] = useState(false);
  const [RowData, setRowData] = useState([]);
console.log(RowData)
const handleOpenCardModel =(row)=>{
  setRowData(row.providerName.toUpperCase())
  setModalData(row?.gameDetails?.[0])
  setShow(true);
}
  const getResponseData = async () => {
    const res = await GET_ALL_GAMES();
    if (res.status) {
      setAppUrl(res.appInfo);
    }
  };
  useEffect(() => {
    getResponseData();
  }, []);

  const showData = (data) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (data.length > 0) {
      const result = [];
      for (const item of data) {
        if (
          weekday
            .map((day) => day.toLowerCase())
            .includes(item.gameDay.toLowerCase())
        ) {
          return item;
        }
      }
    }
  };

  const downloadFile = async () => {
    await downloadAPK();
  };
  return (
    <>
      <div className="available-component">
        <div className="heding-sec heading-sec-custom m-2 d-flex text-center justify-content-center align-items-center">
          <img src={star} alt="" />
          <h1 className="mb-3 mt-3 ms-2 me-2 font-700">Available Games</h1>
          <img src={star} alt="" />
        </div>

        <div className="container">
          <div className="row">
            {GameData &&
              GameData?.map((data, index) => (
                <div key={index} className="col-xl-4 col-lg-4 col-md-12 mb-3">
                  <div className="second-card ">
                    <div className="second-card-image-main">
                      <img src={cardImage} onClick={()=>handleOpenCardModel(data)}/>
                    </div>

                    <div className="top-sec second-card-top-sec d-flex justify-content-between align-items-center ">
                      <div className="card-text">
                        <div className="card-text-main set-margin">
                          <h5 className="primary-color font-700">
                            {data.providerName.toUpperCase()}
                          </h5>

                          <h3 className="font-700">{data.providerResult}</h3>
                          <h6
                            className={`mb-1 batting_size ${
                              showData(data?.gameDetails)?.message ===
                              "Close for today"
                                ? "close-for-today"
                                : showData(data?.gameDetails)?.message ===
                                  "Betting is running for close"
                                ? "betting-closed"
                                : showData(data?.gameDetails)?.message ===
                                  "Betting is running for open"
                                ? "default-message"
                                : "default-message"
                            }`}
                          >
                            {showData(data?.gameDetails)?.message}
                          </h6>
                        </div>
                      </div>
                      <div
                        className={`play-icon ${
                          showData(data?.gameDetails)?.message ===
                          "Close for today"
                            ? ""
                            : "zoom-in-zoom-out"
                        }`}
                      >
                        <a
                          href="#"
                          onClick={() =>
                            downloadFile(showData(data?.gameDetails)?.message)
                          }
                        >
                          <svg
                            id="video"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 31.277 31.708"
                          >
                            <path
                              id="Path_593"
                              data-name="Path 593"
                              d="M15.589,0A15.589,15.589,0,1,1,0,15.589,15.589,15.589,0,0,1,15.589,0Z"
                              className="play_icon_class"
                              transform="translate(0.098 0)"
                              fill={
                                showData(data?.gameDetails)?.message ===
                                "Close for today"
                                  ? "#6c757d"
                                  : "#478767"
                              }
                            ></path>
                            <path
                              id="Path_590"
                              data-name="Path 590"
                              d="M31.179,256H0a15.589,15.589,0,1,0,31.179,0Z"
                              transform="translate(0 -239.882)"
                              fill={
                                showData(data?.gameDetails)?.message ===
                                "Close for today"
                                  ? "#6c757d"
                                  : "#478767"
                              }
                            ></path>
                            <g
                              id="Group_1840"
                              data-name="Group 1840"
                              transform="translate(11.884 8.643)"
                            >
                              <g
                                id="Group_1786"
                                data-name="Group 1786"
                                transform="translate(0 0)"
                              >
                                <g id="Group_1785" data-name="Group 1785">
                                  <path
                                    id="Path_591"
                                    data-name="Path 591"
                                    d="M171.741,125.324a.741.741,0,0,1-.741-.741V111.741a.741.741,0,0,1,1.175-.6l8.89,6.421a.741.741,0,0,1,0,1.2l-8.89,6.421A.74.74,0,0,1,171.741,125.324Z"
                                    transform="translate(-171 -111)"
                                    fill="#fff"
                                  ></path>
                                </g>
                              </g>
                              <g
                                id="Group_1787"
                                data-name="Group 1787"
                                transform="translate(0 7.162)"
                              >
                                <path
                                  id="Path_592"
                                  data-name="Path 592"
                                  d="M171,256v6.421a.741.741,0,0,0,1.175.6l8.89-6.421a.741.741,0,0,0,.307-.6Z"
                                  transform="translate(-171 -256)"
                                  fill="#fff"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="bottom-sec d-flex align-items-center justify-content-center">
                      {showPana ? (
                        <Link
                          to={`/pana-chart/${data?.providerName
                            .toLowerCase()
                            .replace(/\s+/g, "")}/pana-chart`}
                          state={{ title: data?.providerName }}
                          className="chat-btn a-tag-css"
                        >
                          <span>Pana Chart</span>
                        </Link>
                      ) : (
                        ""
                      )}
                      <Link
                        to={`/jodi-chart/${data?.providerName
                          .toLowerCase()
                          .replace(/\s+/g, "")}/jodi-chart`}
                        state={{ title: data?.providerName }}
                        className="chat-btn a-tag-css ml-10px"
                      >
                        <span>Jodi Chart</span>
                      </Link>
                    </div>
                    <hr className="mb-1" />
                    <div class="result__time d-flex justify-content-between">
                      <span>
                        Open Bids :
                        <strong>
                          {showData(data?.gameDetails) != undefined &&
                            showData(data?.gameDetails)?.OBT}
                        </strong>
                      </span>
                      <span>
                        Close Bids :{" "}
                        <strong>
                          {showData(data?.gameDetails) != undefined &&
                            showData(data?.gameDetails)?.CBT}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* .................................................. */}

<CardModel ModalData={ModalData} setShow={setShow} show={show} title={RowData}/>
    </>
  );
};

export default Section4;
