import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#1abc9c'],
        chart: {
          id: "sparkline1",
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'smooth',
          width: 2,
        }
      },
      series: [
        {
          name: "Sales",
          data: [28, 50, 36, 60, 38, 52, 38 ]
        }
      ],
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      yaxis: {
        min: 0
      },
      tooltip: {
        x: {
          show: false,
        }
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area" 
              height={160}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chart1;
