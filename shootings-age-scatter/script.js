var data = [{
x: 6,
y: 2
}, {
x: 8,
y: 2
}, {
x: 9,
y: 1
}, {
x: 11,
y: 2
}, {
x: 12,
y: 7
}, {
x: 13,
y: 11,
}, {
x: 14,
y: 29
}, {
x: 15,
y: 45
}, {
x: 16,
y: 37
}, {
x: 17,
y: 31
}, {
x: 18,
y: 16
}, {
x: 19,
y: 13
}, {
x: 20,
y: 5
}, {
x: 22,
y: 2
}, {
x: 23,
y: 3
},{
x: 24,
y: 1
},{
x: 25,
y: 2
}, {
x: 26,
y: 2
}, {
x: 27,
y: 1
}, {
x: 28,
y: 5
},{
x: 29,
y: 1
}, {
x: 30,
y: 2
}, {
x: 32,
y: 3
}, {
x: 33,
y: 1
}, {
x: 34,
y: 1
}, {
x: 38,
y: 2
}, {
x: 39,
y: 1
}, {
x: 41,
y: 2
}, {
x: 42,
y: 1
}, {
x: 44,
y: 2
}, {
x: 45,
y: 2
}, {
x: 47,
y: 2
}, {
x: 48,
y: 1
}, {
x: 49,
y: 1
}, {
x: 50,
y: 1
}, {
x: 53,
y: 3
}, {
x: 54,
y: 1
}, {
x: 55,
y: 1
}, {
x: 56,
y: 1
}, {
x: 72,
y: 1
}]

var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          label: 'Data',
        data: {
        datasets: [{
                label: 'School Shootings', // Name the series
                data: data, // Specify the data values array
          borderColor: '#B2AC88', // Add custom color border
          backgroundColor: '#B2AC88', // Add custom color background (Points and Fill)
            }]
    },
          options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Since Columbine, most school shooters have been teenagers',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: '15 year olds committed 45 shootings in total. '
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Number of Shootings'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Age of Shooter'
                  }
              }
            }
          }
        });
