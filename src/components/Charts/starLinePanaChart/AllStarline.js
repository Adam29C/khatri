import { useEffect, useState } from "react";
import { AllSingleDayChart } from "./Chart.config";
import { redJodi } from "../JodiCharts/Chart.config";
import { useNavigate, useLocation } from "react-router-dom";
import { GET_ALL_STARLINE_PANA_CHART } from "../../service/admin.service";

const AllJackpot = ({}) => {

  const [chartData, setchartData] = useState([]);

  const getData = async () => {
    const req = "";
    const res = await GET_ALL_STARLINE_PANA_CHART();
    setchartData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <table className="table fw-bold" border="collapse">
        <thead>
          <tr>
            <th className="cc">Date</th>
            <th className="cc">11:00 AM</th>
            <th className="cc">10:00 AM</th>
            <th className="cc">12:00 PM</th>
            <th className="cc">01:00 PM</th>
            <th className="cc">02:00 PM</th>
            <th className="cc">03:00 PM</th>
            <th className="cc">04:00 PM</th>
            <th className="cc">05:00 PM</th>
            <th className="cc">06:00 PM</th>
            <th className="cc">07:00 PM</th>
            <th className="cc">08:00 PM</th>
            <th className="cc">09:00 PM</th>
          </tr>
        </thead>
        <tbody>
      
          {Object.entries(AllSingleDayChart).map(([week, days], index) => (
            <tr key={index}>
              <td className="cc td-width-13">
                <div className="pana-chart-main">
                  <span className="result_date">{week}</span>
                </div>
              </td>

              {Object.entries(days).map(([day, values], id) => (
                <td key={id} className="cc">
                  <div className="kalyan-chart-number-black">
                    <div className="kalyan-chart-number-black">
                      <span
                        className={`cp ${
                          redJodi
                            .map((j) => parseInt(j))
                            .includes(parseInt(values[1]))
                            ? "text-danger"
                            : "text-dark"
                        }`}
                      >
                        {values[0]}
                      </span>
                      <span
                        className={`cp ${
                          redJodi
                            .map((j) => parseInt(j))
                            .includes(parseInt(values[1]))
                            ? "text-danger"
                            : "text-dark"
                        }`}
                      >
                        {values[1]}
                      </span>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
          {chartData.data &&
            chartData.data.map((item1) => (
              <tr key={item1.id}>
                <td className="cc td-width-13">
                  <div className="pana-chart-main">
                    <span className="result_date">{item1.resultDate} </span>
                  </div>
                </td>
                {item1.results.map((nestedItem) => {
                  const isInRedJodi = redJodi
                    .map((j) => parseInt(j))
                    .includes(parseInt(nestedItem.winningDigitFamily));

                  return (
                    <td key={nestedItem.id} className="cc">
                      <div className="kalyan-chart-number-black">
                        <span
                          className={`cp ${
                            isInRedJodi ? "text-danger" : "text-dark"
                          }`}
                        >
                          {nestedItem && nestedItem.winningDigit}
                        </span>
                        <span
                          className={`cp ${
                            isInRedJodi ? "text-danger" : "text-dark"
                          }`}
                        >
                          {nestedItem && nestedItem.winningDigitFamily}
                        </span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllJackpot;
