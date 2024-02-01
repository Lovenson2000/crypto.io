"use client";
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

function generateDayWiseTimeSeries(startTime, numDays, valueRange) {
    const dayMillis = 24 * 60 * 60 * 1000; // milliseconds in a day
    const series = [];
  
    for (let i = 0; i < numDays; i++) {
      const timestamp = startTime + i * dayMillis;
      const value = Math.floor(Math.random() * (valueRange.max - valueRange.min + 1) + valueRange.min);
      series.push([timestamp, value]);
    }
  
    return series;
  }

  
const MyChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          name: 'South',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: 'North',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 20,
          }),
        },
        {
          name: 'Central',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 15,
          }),
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        stacked: true,
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min));
          },
        },
      },
      colors: ['#008FFB', '#00E396', '#CED4DC'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },
      xaxis: {
        type: 'datetime',
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};

export default MyChartComponent;
