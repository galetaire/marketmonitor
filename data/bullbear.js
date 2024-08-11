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
          label: 'Spread dels bons americans de 6 mesos i 10 anys',
          type: 'line',
          data: rangeOne,
          backgroundColor: 'rgba( 69, 34, 64 , 0.4)',
          borderColor: 'rgba( 69, 34, 64 , 1)',
          borderWidth: 1,
          showLine: true,
          pointStyle: 'circle',
          pointRadius: 5,
          fill: false,
          tension: 0.4
        },
        {
          label: 'Mercats EUA ajustats als bons americans (spread)',
          type: 'line',
          data: rangeTwo,
          backgroundColor: 'rgba(220,20,60, 0.4)',
          borderColor: 'rgba(220,20,60, 1)',
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
