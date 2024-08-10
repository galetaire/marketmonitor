document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('assets').getContext('2d');

    var data = {
        labels: ['Or', 'SP500', 'Petroli', 'MSCI World', 'Nikkei 225', 'Immobles', 'MSCI Emerging Markets', 'Matèries primeres', 'Productes agrícoles', 'Euro Stoxx 50', 'Hang Seng'],
        datasets: [{
            label: 'Value in Billions ($)',
            data: [8.9, 4.1, 3.1, 2.5, 2.3, 2.2, 1.8, 1.5, 1.4, 1.3, 1.1], // Assuming the value for Bitcoin is 1 trillion
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
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
