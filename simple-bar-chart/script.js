var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africs'],
        datasets: [{
            label: 'GDP Per Capita by Region',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#967bb6'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Europe & Central Asia have the highest GDP Per Capita',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'America followed close behind. '
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
