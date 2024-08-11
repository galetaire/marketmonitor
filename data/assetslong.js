//makeChart, calling the data and variables from the .csv file
function makeChart(assetslong) {
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 2011
  var rangeLabels = assetslong.map(function(d) {return d.actius2}).slice(rangeStart, rangeEnd);
  var rangeOne = assetslong.map(function(d) {return +d.multiple}).slice(rangeStart, rangeEnd);

function getRandomColor(alpha = 0.3) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

const backgroundColors = assetslong.map(() => getRandomColor());

  Chart.defaults.font.size = 12;
  var chart = new Chart('assetslong', {
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
          label: 'Vegades que ha multiplicat el seu valor',
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
d3.csv('https://raw.githubusercontent.com/galetaire/marketmonitor/main/actius.csv')
  .then(makeChart);
