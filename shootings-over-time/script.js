var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1999', '2000',	'2001',	'2002',	'2003',	'2004',	'2005',	'2006',	'2007',	'2008', `2009`, `2010`,`2011`,`2012`, `2013`, `2014`, `2015`, `2016`, `2017`,`2018`,`2019`,`2020`,`2021`,`2022`],
        datasets: [{
            label: 'Number of shooting',
            data: [7, 12, 13, 5, 12, 9, 13, 14, 10, 8, 9, 9, 7, 11, 13, 15, 7, 13, 15, 30, 25, 9, 41, 24],
            fill: true,
            borderColor: '#800000',
            tension: 0.2},
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'School shootings have increased over time.',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: '2022 is already the fourth-highest year for shootings, surpassing 2020 rates. '
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});
