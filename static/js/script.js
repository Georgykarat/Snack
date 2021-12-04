$(function(){ 

    var initcolor = 'white';


    var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'transparent',
            hoverBackgroundColor: 'white',
            borderColor: initcolor,
            borderWidth: 5,
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {
        pointLabels: {
            display:false,
        },
        animation: {
            duration: 1000,
        },
        legend: {
            display: false,
        },
        layout: {
            display: false,
        },
        scales: {
            xAxes: [ {
              display:false,
              ticks: {
                display: false
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            } ],
            yAxes: [ {
                display:false,
              ticks: {
                display: false
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            } ],
            gridLines: {
                display: false
             }
          },

    }
});

    const statin = function(){
        $('.statistics-section').fadeIn(900);
    }

   $('.statistics-block').on('click', function(){
       $('main').fadeOut(900,statin);
   });
   $('.h4').on('click', function(){
       $(this).parent().parent().fadeOut(900);
       $('main').fadeIn(900);
   })


   var ctx = document.getElementById('date_points').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['June 15th', 'June 16th', 'June 17th', 'June 18th', 'June 19th', 'June 20th', 'June 21st'],
        datasets: [{
            label: 'Exp. per day',
            backgroundColor: '#27cf7f50',
            borderColor: '#27cf7f',
            borderWidth: 5,
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Progress',
            fontSize: 24,
            fontFamily: 'Lemon Milk Pro b',
            fontColor: '#27cf7f',
        },
        scales: {
            xAxes: [ {
              ticks: {
                fontSize: 10,
                fontFamily: 'Lemon Milk Pro b',
                fontColor: '#27cf7f',
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            } ],
            yAxes: [ {
                display: false,
              ticks: {
                display: false,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            } ],
            gridLines: {
                display: false
             }
          },
    }
});
var ctx = document.getElementById('date_scale').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'polarArea',

    // The data for our dataset
    data: {
        labels: ['Python', 'HTML', 'CSS', 'Adobe Photoshop','C'],
        datasets: [{
            label: 'Exp. per day',
            backgroundColor: ['#4BB9F250','#4BB32250','#1F002250','#00FF2250','#00ffF050'],
            borderColor: 'black',
            borderWidth: 1,
            data: [20, 100, 95, 70, 5]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Specialization',
            fontSize: 18,
            fontFamily: 'Lemon Milk Pro b',
            fontColor: '#27cf7f',
        },
        scales: {
            xAxes: [ {
                    display: false,
                ticks: {
                display: false,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            } ],
            yAxes: [ {
                display: false,
              ticks: {
                display: false,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            } ],
            gridLines: {
                display: false
             }
          },
    }
});


});