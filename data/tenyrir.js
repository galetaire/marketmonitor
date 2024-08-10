//makeChart, calling the data and variables from the .csv file
function makeChart(tenyrir) {
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 1989
  var rangeLabels = tenyrir.map(function(d) {return d.year}).slice(rangeStart, rangeEnd);
  var rangeOne = tenyrir.map(function(d) {return +d.b10y_us}).slice(rangeStart, rangeEnd);
  var rangeTwo = tenyrir.map(function(d) {return +d.ir}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('tenyrir', {
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
          label: 'Títol de deute americana a 10 any',
          type: 'line',
          data: rangeOne,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: 'rgba(0,0,0, 1)',
          borderWidth: 1,
          pointStyle: 'circle',
          pointRadius: 5,
          fill: false,
          tension: 0.4
        },
        {
          label: 'Tipus interès bancari, FED funds rate',
          type: 'line',
          data: rangeTwo,
          backgroundColor: 'rgba( 230, 126, 34 , 0.5)',
          borderColor: 'rgba( 230, 126, 34 , 1)',
          borderWidth: 1,
          showLine: true,
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
