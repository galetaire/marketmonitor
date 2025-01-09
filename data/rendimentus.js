//makeChart, calling the data and variables from the .csv file
function makeChart(rendimentus) {
  var negativeColor = "rgba(220,20,60,0.4)";
  var positiveColor = "rgba(17,120,10,0.4)";
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 1989
  var rangeLabels = rendimentus.map(function(d) {return d.year}).slice(rangeStart, rangeEnd);
  var rangeOne = rendimentus.map(function(d) {return +d.change_market}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('rendimentus', {
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
          label: 'Rendiment dels mercats dels EUA, en %',
          type: 'bar',
          data: rangeOne,
          backgroundColor: 'rgba( 46, 64, 83 , 0.2)',
          borderColor: 'rgba( 46, 64, 83 , 1)',
          borderWidth: 1
        }
      ]
    }
  })
}

// Request data from .csv file using D3js library
d3.csv('https://raw.githubusercontent.com/galetaire/marketmonitor/main/market_data.csv')
  .then(makeChart);
