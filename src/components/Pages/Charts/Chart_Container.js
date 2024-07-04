import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { GET_ALL_GAMESLIST } from "../../service/admin.service";
import infinity from "../../../images/infinity.png";
const Charts_Container = ({ title, data, link , responsive_Class }) => {
  //   const [getData, setgetData] = useState([]);

  //   console.log("getData" ,getData);
  //   const getResponseData = async () => {
  //     const res = await GET_ALL_GAMESLIST();
  //     setgetData(res.data);
  //   };
  //   useEffect(() => {
  //     getResponseData();
  //   }, []);

  const Details = (route, name) => {
    if (route === "jodi") {
      return `/jodi-chart/${name
        .toLowerCase()
        .replace(/\s+/g, "")}/jodi-chart?`;
    } else if (route === "pana") {
      return `/pana-chart/${name.toLowerCase().replace(/\s+/g, "")}/pana-chart`;
    } else if (route === "starline") {
      return `/starline/${name.toLowerCase().replace(/\s+/g, "")}`;
    } else if (route === "jackpot") {
      return `/andarbahar/${name.toLowerCase().replace(/\s+/g, "")}`;
    }
  };

  return (
    <>
      {/* <div className="container">
        <div className="row"> */}
          <div className={responsive_Class}>
            <div className="shadow card rounded-3 border-0 timetable">
              <div className="card-body">
                <h3 className="ms-2 fw-bold pt-2 pb-4">    {title}</h3>
                <div>
                  {data &&
                    data.map((data1, index) => (
                      <>
                        <div className=" d-flex align-items-center ">
                          <img src={infinity} alt="" className="mx-2 img-hover-rotate " />
                          <h4
                           className="mx-4"
                          >
                            <Link
                              to={Details(link, data1.providerName)}
                              state={{ title: data1.providerName }}
                              className="text-decoration-none primary-color"
                            >
                              {data1.providerName.toUpperCase()}
                            </Link>
                          </h4>
                       
                        </div>
                        <hr />
                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>
        
        {/* </div>
      </div> */}

      {/* <main
        className="container"
        style={{ padding: "0px 10px", marginBottom: "40px" }}
      >
        <h2
          className="h2 mb-20 text-decoration-underline"
          style={{
            textAlign: "center",
            lineHeight: "1.3",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          {title}
        </h2>
        <section>
          <div className="col-xl-6 col-md-6 ">
            {data &&
              data.map((data1, index) => (
                <div className="shadow card rounded border-0 timetable">
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <a
                      className="chart-link"
                      style={{
                        transition: "all 0.3s ease 0s",
                        textDecoration: "none",
                        color: "#191d3b",
                      }}
                    >
                      <h4
                        style={{
                          fontWeight: "500",
                          color: "rgb(34, , 34)",
                          borderLeft: "4px solid #191d3b ",
                          margin: "0px",
                        }}
                      >
                        <Link
                          to={Details(link, data1.providerName)}
                          state={{ title: data1.providerName }}
                          className="text-decoration-none primary-color"
                        >
                          {data1.providerName.toUpperCase()}
                        </Link>
                      </h4>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main> */}
    </>
  );
};

export default Charts_Container;
