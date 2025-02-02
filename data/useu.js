//makeChart, calling the data and variables from the .csv file
function makeChart(useu) {
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 1989
  var rangeLabels = useu.map(function(d) {return d.year}).slice(rangeStart, rangeEnd);
  var rangeOne = useu.map(function(d) {return +d.d_market_money_b100_2005}).slice(rangeStart, rangeEnd);
  var rangeTwo = useu.map(function(d) {return +d.e_market_money_b100_2005}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('useu', {
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
          label: 'Mercats de la UE',
          type: 'line',
          data: rangeTwo,
          backgroundColor: 'rgba(0, 0, 205, 0.2)',
          borderColor: 'rgba(0, 0, 205, 1)',
          borderWidth: 1,
          pointStyle: 'circle',
          pointRadius: 5,
          fill: false,
          tension: 0.4
        },
        {
          label: 'Mercats dels EUA',
          type: 'line',
          data: rangeOne,
          backgroundColor: 'rgba(220,20,60, 0.2)',
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
