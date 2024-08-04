//makeChart, calling the data and variables from the .csv file
function makeChart(bullbear) {
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 1989
  var rangeLabels = bullbear.map(function(d) {return d.year}).slice(rangeStart, rangeEnd);
  var rangeOne= bullbear.map(function(d) {return +d.spread_6m_10y}).slice(rangeStart, rangeEnd);
  var rangeTwo = bullbear.map(function(d) {return +d.market_mass_norm_spread}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('bullbear', {
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
          label: 'Spread between the 6 month and 10 year US bond',
          type: 'line',
          data: rangeOne,
          backgroundColor: 'rgba(220,20,60, 0.5)',
          borderColor: 'rgba(220,20,60, 1)',
          borderWidth: 2,
          showLine: true,
          pointStyle: 'circle',
          pointRadius: 3,
          fill: false,
          tension: 0.4
        },
        {
          label: 'US market adjusted to the US bond spread',
          type: 'line',
          data: rangeTwo,
          backgroundColor: 'rgba(0, 128, 0, 0.5)',
          borderColor: 'rgba(0,128,0, 1)',
          borderWidth: 2,
          pointStyle: 'circle',
          pointRadius: 3,
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
