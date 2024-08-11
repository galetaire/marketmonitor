document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('wealthstore').getContext('2d');

    var data = {
        labels: ['Residencial (i)', 'Títols de deute', 'Accions', 'PIB global', 'Terres agrícoles', 'Comercial (i)', 'Or', 'Bitcoin'],
        datasets: [{
            label: 'Valor en bilions ($)',
            data: [258, 123, 109, 84, 35, 32, 12, 1], // Assuming the value for Bitcoin is 1 trillion
            backgroundColor: [
                'rgba( 191, 98, 152 , 0.2)',
                'rgba( 39, 145, 199 , 0.2)',
                'rgba( 51, 165, 32 , 0.2)',
                'rgba( 255, 0, 0 ,  0.2)',
                'rgba( 156, 102, 41 , 0.2)',
                'rgba( 159, 46, 243 , 0.2)',
                'rgba( 243, 206, 46 , 0.2)',
                'rgba( 255, 152, 30, 0.2)'
            ],
            borderColor: [
              'rgba( 191, 98, 152 , 1)',
              'rgba( 39, 145, 199 , 1)',
              'rgba( 51, 165, 32 , 1)',
              'rgba( 255, 0, 0 ,  1)',
              'rgba( 156, 102, 41 , 1)',
              'rgba( 159, 46, 243 , 1)',
              'rgba( 243, 206, 46 , 1)',
              'rgba( 255, 152, 30, 1)'
            ],
            borderWidth: 1
        }]
    };

    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});
