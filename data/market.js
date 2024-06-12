//makeChart, calling the data and variables from the .csv file
function makeChart(market) {
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 1989
  var rangeLabels = market.map(function(d) {return d.year}).slice(rangeStart, rangeEnd);
  var rangeOne = market.map(function(d) {return +d.market_avg}).slice(rangeStart, rangeEnd);
  var rangeTwo = market.map(function(d) {return +d.market_mass_b100_2005}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('market', {
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
          label: 'Markets adjusted to money stock (Base 2005)',
          type: 'line',
          data: rangeTwo,
          backgroundColor: 'rgba(0, 176, 240, 0.2)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 1,
          borderDash: [3,3],
          pointStyle: 'circle',
          pointRadius: 8,
          fill: false,
        },
        {
          label: 'Market average',
          type: 'line',
          data: rangeOne,
          backgroundColor: 'rgba(0,0,0, 1)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 2,
          borderDash: [5, 5],
          showLine: true,
          pointStyle: 'point',
          pointRadius: 0,
          fill: false
        }
      ]
    }
  })
}

// Request data from .csv file using D3js library
d3.csv('https://raw.githubusercontent.com/galetaire/marketmonitor/main/market_data.csv')
  .then(makeChart);
