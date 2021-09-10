import React, { Component } from "react";
import Chart from "react-apexcharts";

class TotalVisits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#2196f3'],
        chart: {
          id: "unique-visits",
          group: 'sparks2',
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
        data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
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
                    top: 45,
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

export default TotalVisits;
