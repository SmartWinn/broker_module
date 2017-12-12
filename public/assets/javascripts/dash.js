$(function() {

    var sparklineCharts = function(){
        $("#sparkline1").sparkline([34, 43, 43, 35, 44, 32, 44, 52], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#1ab394',
            fillColor: "transparent"
        });

        $("#sparkline2").sparkline([32, 11, 25, 37, 41, 32, 34, 42], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#1ab394',
            fillColor: "transparent"
        });

        $("#sparkline3").sparkline([34, 22, 24, 41, 10, 18, 16,8], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#1C84C6',
            fillColor: "transparent"
        });
    };

    var sparkResize;

    $(window).resize(function(e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineCharts, 500);
    });

    sparklineCharts();




    var data1 = [
        [0,4],[1,8],[2,5],[3,10],[4,4],[5,16],[6,5],[7,11],[8,6],[9,11],[10,20],[11,10],[12,13],[13,4],[14,7],[15,8],[16,12]
    ];
    var data2 = [
        [0,0],[1,2],[2,7],[3,4],[4,11],[5,4],[6,2],[7,5],[8,11],[9,5],[10,4],[11,1],[12,5],[13,2],[14,5],[15,2],[16,0]
    ];
    $("#flot-dashboard5-chart").length && $.plot($("#flot-dashboard5-chart"), [
                data1,  data2
            ],
            {
                series: {
                    lines: {
                        show: false,
                        fill: true
                    },
                    splines: {
                        show: true,
                        tension: 0.4,
                        lineWidth: 1,
                        fill: 0.4
                    },
                    points: {
                        radius: 0,
                        show: true
                    },
                    shadowSize: 2
                },
                grid: {
                    hoverable: true,
                    clickable: true,

                    borderWidth: 2,
                    color: 'transparent'
                },
                colors: ["#1ab394", "#1C84C6"],
                xaxis:{
                },
                yaxis: {
                },
                tooltip: false
            }
    );

    var doughnutData = {
        labels: ["Zenit Seguros", "Liberty Mutal", "Bco Seguros", "Banco Santander", "Scotiabank",  "SURA Seguros"],
        datasets: [{
            data: [300,50,100,200,140,180],
            backgroundColor: ["#a3e1d4","#dedede","#b5b8cf","#69b8ca","#d3dc5a","#ca8fe7"]
        }]
    } ;


    var doughnutOptions = {
        responsive: true
    };


    var ctx4 = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});

    var barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {              
                label: "Car Insurance",
                backgroundColor: 'rgba(220, 220, 220, 0.5)',
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Travel Insurance",
                backgroundColor: 'rgba(26,179,148,0.5)',
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            },
            {
                label: "House Insurance",
                backgroundColor: 'rgba(152,245,165,0.5)',
                borderColor: "rgba(152,245,165,0.7)",
                pointBackgroundColor: "rgba(152,245,165,1)",
                pointBorderColor: "#fff",
                data: [48, 38, 44, 12, 26, 23, 74]
            },
            {
                label: "RCP Insurance",
                backgroundColor: 'rgba(255,106,106,0.5)',
                borderColor: "rgba(255,106,106,0.7)",
                pointBackgroundColor: "rgba(255,106,106,1)",
                pointBorderColor: "#fff",
                data: [68, 48, 43, 15, 77, 57, 40]
            },
            {
                label: "SOAP Insurance",
                backgroundColor: 'rgba(157,206,160,0.5)',
                borderColor: "rgba(157,206,160,0.7)",
                pointBackgroundColor: "rgba(157,206,160,1)",
                pointBorderColor: "#fff",
                data: [66, 54, 70, 45, 83, 29, 50]
            },
            {
                label: "Life Insurance",
                backgroundColor: 'rgba(211,220,90,0.5)',
                borderColor: "rgba(211,220,90,0.7)",
                pointBackgroundColor: "rgba(211,220,90,1)",
                pointBorderColor: "#fff",
                data: [23, 42, 50, 45, 35, 55, 78]
            },
            {
                label: "Motorcycle Insurance",
                backgroundColor: 'rgba(121,85,72,0.5)',
                borderColor: "rgba(121,85,72,0.7)",
                pointBackgroundColor: "rgba(121,85,72,1)",
                pointBorderColor: "#fff",
                data: [55, 44, 60, 49, 76, 55, 90]
            },
            {
                label: "Condominium Insurance",
                backgroundColor: 'rgba(0,188,212,0.5)',
                borderColor: "rgba(0,188,212,0.7)",
                pointBackgroundColor: "rgba(0,188,212,1)",
                pointBorderColor: "#fff",
                data: [88, 78, 60, 79, 80, 57, 70]
            }
        ]
    };

    var barOptions = {
        responsive: true
    };


    var ctx2 = document.getElementById("barChart").getContext("2d");
    new Chart(ctx2, {type: 'bar', data: barData, options:barOptions});

});

$(document).ready(function(){
    
    var clickEvent = false;
    $('#myCarousel').carousel({
        interval:   4000    
    }).on('click', '.list-group li', function() {
            clickEvent = true;
            $('.list-group li').removeClass('active');
            $(this).addClass('active');     
    }).on('slid.bs.carousel', function(e) {
        if(!clickEvent) {
            var count = $('.list-group').children().length -1;
            var current = $('.list-group li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if(count == id) {
                $('.list-group li').first().addClass('active'); 
            }
        }
        clickEvent = false;
    });
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
    $('#myCarousel .list-group-item').outerHeight(triggerheight);
})

// $(window).load(function() {
    
// });
