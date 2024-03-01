import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import 'chart.js/auto' for compatibility with ES6 modules

const DataChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Generate data for the custom chart
    const data = generateChartData();

    // Create the chart
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: data.length }, (_, i) => i + 1),
        datasets: [
          {
            label: 'Smooth Up-Down Chart',
            borderColor: 'rgba(75, 192, 192, 1)',
            data: data,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000,
        },
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            type: 'linear',
            position: 'left',
          },
        },
      },
    });
  }, []); // Run this effect only once

  // Function to generate custom chart data
  const generateChartData = () => {
    const data = [];
    for (let i = 0; i <= 100; i++) {
      const value = Math.sin((i / 10) * Math.PI) * 10 + i / 2;
      data.push(value);
    }
    return data;
  };

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default DataChart;

