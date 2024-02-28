//makeChart, calling the data and variables from the .csv file
function makeChart(multivariate) {
  var rangeStart = 2
  var rangeEnd = new Date().getFullYear() - 1990 + 1
  var rangeLabels = multivariate.map(function(d) {return d.Year}).slice(rangeStart, rangeEnd);
  var rangeInflation = multivariate.map(function(d) {return +d.market_mass_b100_2005}).slice(rangeStart, rangeEnd);
  var rangeMortgages = multivariate.map(function(d) {return +d.market_money}).slice(rangeStart, rangeEnd);
  var rangeReal = multivariate.map(function(d) {return +d.spread_6m_10y}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 18;
  var chart = new Chart('multivariate', {
    type: 'bar',
    options: {
        scales: {
            x: {
                stacked: true,
                ticks: {
                  autoSkip: false,
                  maxRotation: 90,
                  minRotation: 90,
                },
              },
            y: {
                stacked: false,
            }
        }
    },
    data: {
      labels: rangeLabels,
      datasets: [
        {
          label: 'Inflation',
          type: 'line',
          data: rangeInflation,
          backgroundColor: 'rgba(250, 0, 0, 0.7)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 0.5,
          showLine: false,
          pointStyle: 'circle',
          pointRadius: 4,
          fill: false
        },
        {
          label: 'Mortgages',
          type: 'line',
          data: rangeMortgages,
          backgroundColor: 'rgba(255, 20, 147, 0.2)',
          borderColor: 'rgba(255, 20, 147, 1)',
          borderWidth: 1,
          borderDash: [3,3],
          pointStyle: 'circle',
          pointRadius: 8,
          fill: false
        },
      {
          label: 'Real price',
          backgroundColor: 'rgb(255, 95, 21, 0.4)',
          borderColor: 'rgba(255, 95, 21, 1)',
          borderWidth: 1,
          data: rangeReal,
          categoryPercentage: 0.8,
        }
      ]
    }
  })
}

// Request data from .csv file using D3js library
d3.csv('https://raw.githubusercontent.com/galetaire/marketmonitor/main/market_data.csv')
  .then(makeChart);
