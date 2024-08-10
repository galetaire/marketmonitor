//makeChart, calling the data and variables from the .csv file
function makeChart(assets0) {
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear()
  var rangeLabels = useu.map(function(d) {return d.actius}).slice(rangeStart, rangeEnd);
  var rangeOne = useu.map(function(d) {return +d.rendiment}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('assets0', {
    options: {
        scales: {
          x: {
            ticks: {
            }
            }
        }
    },
    data: {
      labels: rangeLabels,
      datasets: [
        {
          label: 'EU market',
          type: 'bar',
          data: rangeOne,
          backgroundColor: 'rgba(0, 0, 205, 0.2)',
          borderColor: 'rgba(0, 0, 205, 1)',
          borderWidth: 1
        }
      ]
    }
  })
}

// Request data from .csv file using D3js library
d3.csv('https://raw.githubusercontent.com/galetaire/marketmonitor/main/actius.csv')
  .then(makeChart);
