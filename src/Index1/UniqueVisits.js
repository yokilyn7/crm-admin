import React, { Component } from "react";
import Chart from "react-apexcharts";

class UniqueVisitors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
          
        colors: ['#517281', '#f67062'],
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'  
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '14px',
            markers: {
              width: 10,
              height: 10,
            },
            itemMargin: {
              horizontal: 0,
              vertical: 8
            }
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
            },
        },
        series: [{
            name: 'Direct',
            data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
        }, {
            name: 'Organic',
            data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
        }],
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        }
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
              type="bar" 
              height={350}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UniqueVisitors;
