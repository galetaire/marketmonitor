//makeChart, calling the data and variables from the .csv file
function makeChart(indicador) {
  var negativeColor = "rgba(18, 81, 176, 0.12)";
  var positiveColor = "rgba(89, 105, 134, 0.66)";
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 1989
  var rangeLabels = indicador.map(function(d) {return d.year}).slice(rangeStart, rangeEnd);
  var rangeOne = indicador.map(function(d) {return +d.i2}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('indicador', {
    plugins: [{
      beforeUpdate: function(chartInstance) {
        chartInstance.data.datasets.forEach(function(dataset) {
          dataset.backgroundColor = dataset.data.map(function(data) {
          return data < 0 ? negativeColor : positiveColor;
          })
        })
      }
    }],
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
          label: 'Risc de correcció',
          type: 'bar',
          data: rangeOne,
          backgroundColor: 'rgba( 46, 64, 83 , 0.2)',
          borderColor: 'rgba( 46, 64, 83 , 1)',
          borderRadius: Number.MAX_VALUE,
          borderWidth: 1
        }
      ]
    }
  })
}

// Request data from .csv file using D3js library
d3.csv('https://raw.githubusercontent.com/galetaire/marketmonitor/main/market_data.csv')
  .then(makeChart);
