//makeChart, calling the data and variables from the .csv file
function makeChart(dollarmarket) {
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 1989
  var rangeLabels = dollarmarket.map(function(d) {return d.year}).slice(rangeStart, rangeEnd);
  var rangeOne = dollarmarket.map(function(d) {return +d.m2_stock}).slice(rangeStart, rangeEnd);
  var rangeTwo = dollarmarket.map(function(d) {return +d.market_us_avg}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('dollarmarket', {
    options: {
        scales: {
          x: {
            ticks: {
              maxRotation: 90,
              minRotation: 90,
            }
          },
            'left-y-axis': {
                type: 'linear',
                position: 'left',
            },
            'right-y-axis': {
                type: 'linear',
                position: 'right',
            }
        }
    },
    data: {
      labels: rangeLabels,
      datasets: [
        {
          label: 'Mercats del EUA',
          yAxisID: 'right-y-axis',
          type: 'line',
          data: rangeTwo,
          backgroundColor: 'rgba(220,20,60, 0.2)',
          borderColor: 'rgba(220,20,60, 1)',
          borderWidth: 1,
          pointStyle: 'circle',
          pointRadius: 5,
          fill: false,
          tension: 0.4
        },
        {
          label: 'Dòlar, massa monetària',
          yAxisID: 'left-y-axis',
          type: 'line',
          data: rangeOne,
          backgroundColor: 'rgba(0,128,0, 0.2)',
          borderColor: 'rgba(0, 128, 0, 1)',
          borderWidth: 1,
          pointStyle: 'circle',
          pointRadius: 5,
          fill: false,
          tension: 0.4
        }
      ]
    }
  })
}

// Request data from .csv file using D3js library
d3.csv('https://raw.githubusercontent.com/galetaire/marketmonitor/main/market_data.csv')
  .then(makeChart);
