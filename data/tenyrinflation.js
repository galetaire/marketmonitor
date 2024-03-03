//makeChart, calling the data and variables from the .csv file
function makeChart(tenyrinflation) {
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 1989
  var rangeLabels = tenyrinflation.map(function(d) {return d.year}).slice(rangeStart, rangeEnd);
  var rangeMarket = tenyrinflation.map(function(d) {return +d.b10y_us}).slice(rangeStart, rangeEnd);
  var rangeMoney = tenyrinflation.map(function(d) {return +d.inflation}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('tenyrinflation', {
    options: {
        scales: {
          x: {
            ticks: {
              maxRotation: 90,
              minRotation: 90,
            }
            }
        }
    },
    data: {
      labels: rangeLabels,
      datasets: [
        {
          label: 'Markets adjusted to money stock, Base 2005',
          type: 'line',
          data: rangeMarket,
          backgroundColor: 'rgba(0, 0, 0, 1)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 1,
          showLine: true,
          pointStyle: 'line',
          pointRadius: 2,
          fill: false
        },
        {
          label: 'Historical average',
          type: 'line',
          data: rangeMoney,
          backgroundColor: 'rgba(0, 176, 240, 0.2)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 1,
          borderDash: [3,3],
          pointStyle: 'circle',
          pointRadius: 8,
          fill: false
        }
      ]
    }
  })
}

// Request data from .csv file using D3js library
d3.csv('https://raw.githubusercontent.com/galetaire/marketmonitor/main/market_data.csv')
  .then(makeChart);
