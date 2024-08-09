import { MADHURDAY } from "./Chart.config";
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
          {Object.entries(MADHURDAY).map(([week, days], index) => (
            <tr key={index}>
              <td className="cc td-width-13">
                <div className="pana-chart-main">
                  <span className="result_date">{week}</span>
                </div>
              </td>

              {Object.entries(days).map(([day, values], id) => (
                <td key={id} className="cc">
                  <div className="kalyan-chart-number-black">
                    <span className="cp">{values[0]}</span>
                    <span className="cp">{values[1]}</span>
                    <span className="cp">{values[2]}</span>
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
                {item1.data.map((nestedItem) => (
                  <td key={nestedItem.id} className="cc">
                    <div className="kalyan-chart-number-black">
                      <span className="cp">
                        {nestedItem.relatedData[0] &&
                          nestedItem.relatedData[0].winningDigit}
                      </span>
                      <span className="cp">
                        {nestedItem.relatedData[0] &&
                          nestedItem.relatedData[0].winningDigitFamily}
                        {nestedItem.relatedData[1] &&
                          nestedItem.relatedData[1].winningDigitFamily}
                      </span>
                      <span className="cp">
                        {nestedItem.relatedData[1] &&
                          nestedItem.relatedData[1].winningDigit}
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

export default ShreeDevi;
