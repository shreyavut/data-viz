var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [`accidental`,  `indiscriminate`, `public suicide`, `targeted`, `unclear`],
        datasets: [{
            label: 'Number of shootings',
            data: [6426, 8001, 1573, 28754, 11314],
            backgroundColor: [
                '#07004D'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Most school shootings are targeted',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Targeted shootings occurred nearly twice as frequently as other shootings. '
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
