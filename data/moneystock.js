//makeChart, calling the data and variables from the .csv file
function makeChart(moneystock) {
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 1989
  var rangeLabels = moneystock.map(function(d) {return d.year}).slice(rangeStart, rangeEnd);
  var rangeOne = moneystock.map(function(d) {return +d.d_yearly_var_m2_per}).slice(rangeStart, rangeEnd);
  var rangeTwo = moneystock.map(function(d) {return +d.e_yearly_var_m2_per}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('moneystock', {
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
          label: 'Euro stock change',
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
          label: 'Dollar stock change',
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
