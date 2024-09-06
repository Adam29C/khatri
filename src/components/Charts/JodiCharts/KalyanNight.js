import React from "react";
import { KalyanNight } from "./Chart.config";
// import { Data } from "../ShreeJackpot/Chart.config";
import { redJodi } from "../JodiCharts/Chart.config";

const ShreeDay = ({ chartData }) => {
  return (
    <div>
      <table className="table fw-bold" border="collapse">
        <thead>
          <tr>
            <th className="ch">MON</th>
            <th className="ch">TUE</th>
            <th className="ch">WED</th>
            <th className="ch">THU</th>
            <th className="ch">FRI</th>
            <th className="ch">SAT</th>
            <th className="ch">SUN</th>
          </tr>
        </thead>
        <tbody>
          {KalyanNight.map((group, groupIndex) => (
            <tr key={groupIndex}>
              {group.map((item) => (
                <td className="cc">
                  <div className="kalyan-chart-number-black">
                    <span
                      className={`cp ${
                        redJodi
                          .map((j) => parseInt(j))
                          .includes(parseInt(item.value))
                          ? "text-danger"
                          : "text-dark"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          ))}

          {chartData &&
            chartData.map((item1) => (
              <tr key={item1.id}>
                {item1.data.map((nestedItem) => (
                  <td key={nestedItem.id} className="cc">
                    <div className="kalyan-chart-number-black">
                      <span
                        className={`cp ${
                          redJodi
                            .map((j) => parseInt(j))
                            .includes(parseInt(item1.value))
                            ? "text-danger"
                            : "text-dark"
                        }`}
                      >
                        {nestedItem.relatedData[0] &&
                          nestedItem.relatedData[0].winningDigitFamily}
                        {nestedItem.relatedData[1] &&
                          nestedItem.relatedData[1].winningDigitFamily}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShreeDay;
