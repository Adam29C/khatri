import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { GET_ALL_GAMESLIST } from "../../service/admin.service";
import infinity from "../../../images/infinit.svg";
const Charts_Container = ({ title, data, link, responsive_Class }) => {
 

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
      <div className={responsive_Class}>
        <div className="shadow card rounded-3 border-0 timetable">
          <div className="card-body">
            <h3 className="ms-2 fw-bold pt-2 pb-4"> {title}</h3>
            <div>
              {title === "Ratan Starline" || title === "Ratan Jackpot" ? (
                <>
                  <div className=" d-flex align-items-center ">
                    <img
                      src={infinity}
                      alt=""
                      className="mx-2 img-hover-rotate "
                    />
                    <h4 className="mx-4">
                      <Link
                        to={
                          title === "Ratan Starline"
                            ? "/starline/allratanstarline"
                            : "/andarbahar/allratanjackpot"
                        }
                        className="text-decoration-none primary-color"
                        state={{
                          title:
                            title === "Ratan Starline"
                              ? "allratanstarline"
                              : "allratanjackpot",
                        }}
                      >
                        {/* {data1.providerName.toUpperCase()} */}
                        {title === "Ratan Starline"
                          ? "ALL RATAN STARLINE CHART"
                          : "ALL RATAN JACKPOT CHART"}
                      </Link>
                    </h4>
                  </div>
                  <hr />
                </>
              ) : (
                ""
              )}

              {data &&
                data?.map((data1, index) => (
                  <>
                    <div className=" d-flex align-items-center ">
                      <img
                        src={infinity}
                        alt=""
                        className="mx-2 img-hover-rotate "
                      />
                      <h4 className="mx-4">
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
    </>
  );
};

export default Charts_Container;
