var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#F26A8D",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#FF934F",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#06A77D",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#566246",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#052F5F",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#99E1D9",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#57467B",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#1F7A8C",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,

              },
            ]
          },
          options: {
            plugins: {
                title: {
                    display: true,
                    text: 'The United States tops countries in life expectancy rates, GDP Per Capita',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'South Asian countries see lowest GDP Per Capita rates. '
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP Per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });
