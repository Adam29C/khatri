import { SRIDEVI } from "./Chart.config";
import { redJodi } from "../JodiCharts/Chart.config";

const ShreeDevi = ({ chartData }) => {

  return (
    <div>
      <table className="table fw-bold" border="collapse">
        <thead>
          <tr>
            <th className="cc">Date</th>
            <th className="cc">MON</th>
            <th className="cc">TUE</th>
            <th className="cc">WED</th>
            <th className="cc">THU</th>
            <th className="cc">FRI</th>
            <th className="cc">SAT</th>
            <th className="cc">SUN</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(SRIDEVI).map(([week, days], index) => (
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
                      <span
                        className={`cp ${
                          redJodi
                            .map((j) => parseInt(j))
                            .includes(parseInt(values[1]))
                            ? "text-danger"
                            : "text-dark"
                        }`}
                      >
                        {values[2]}
                      </span>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
          {chartData &&
            chartData.map((item1) => (
              <tr key={item1.id}>
                <td className="cc td-width-13">
                  <div className="pana-chart-main">
                    <span className="result_date">{item1.weekStartDay} </span>
                    <span className="result_date">to</span>
                    <span className="result_date"> {item1.weekEndDay}</span>
                  </div>
                </td>
                {item1.data.map((nestedItem) => {
                  const value0 = nestedItem.relatedData[0]
                    ? parseInt(nestedItem.relatedData[0].winningDigitFamily)
                    : null;
                  const value1 = nestedItem.relatedData[1]
                    ? parseInt(nestedItem.relatedData[1].winningDigitFamily)
                    : null;
                  const combinedValue = `${value0}${value1}`;

                  const isInRedJodi = redJodi
                    .map((j) => parseInt(j))
                    .includes(parseInt(combinedValue));

                  return (
                    <td key={nestedItem.id} className="cc">
                      <div className="kalyan-chart-number-black">
                        <span
                          className={`cp ${
                            isInRedJodi ? "text-danger" : "text-dark"
                          }`}
                        >
                          {nestedItem.relatedData[0] &&
                            nestedItem.relatedData[0].winningDigit}
                        </span>
                        <span
                          className={`cp ${
                            isInRedJodi ? "text-danger" : "text-dark"
                          }`}
                        >
                          {nestedItem.relatedData[0] &&
                            nestedItem.relatedData[0].winningDigitFamily}
                          {nestedItem.relatedData[1] &&
                            nestedItem.relatedData[1].winningDigitFamily}
                        </span>
                        <span
                          className={`cp ${
                            isInRedJodi ? "text-danger" : "text-dark"
                          }`}
                        >
                          {nestedItem.relatedData[1] &&
                            nestedItem.relatedData[1].winningDigit}
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

export default ShreeDevi;
