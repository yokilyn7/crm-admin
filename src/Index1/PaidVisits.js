import React, { Component } from "react";
import Chart from "react-apexcharts";

class PaidVisits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#e2a03f'],
        chart: {
          id: "total-users",
          group: 'sparks1',
          type: 'line',
          height: 58,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'smooth',
          width: 2,
        },
      },
      series: [{
        data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
      }],
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          left: 0
        }
      },
     
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            }
          }
        }
      },
      responsive: [
        {
            breakpoint: 576,
            options: {
               chart: {
                  height: 95,
              },
              grid: {
                  padding: {
                    top: 35,
                    bottom: 0,
                    left: 0
                  }
              },
            },
        }
        ]
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
              type="line" 
              height={58}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PaidVisits;
