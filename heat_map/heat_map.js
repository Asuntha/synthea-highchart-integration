$(function () {
    var properties = []; 
    var actual = [];
    var synthetic = [];

    $.getJSON('https://api.myjson.com/bins/1c0qg2', function(data) {
for (var i = 0; i < data.length; i++) {
            properties.push(data[i].property);
            actual.push(data[i].actual);
            synthetic.push(data[i].synthetic);
        }
Highcharts.chart('container', {
    chart: {
        type: 'heatmap',
        
    },

    xAxis: {
         categories: properties
        },
        
    yAxis: {
        title: {
            text: ['Synthetic','Actual'],
        },
    colorAxis: {
        stops: [
            [0, '#000099'],
            [5, '#fffbbc'],
            [10, '#c4463a'],
            [15, '#FFFF99'],
            [20, '#FFFF00']
        ],
        min: 0,
        max: 20,
        startOnTick: false,
        endOnTick: false,
        
    },

    series: [{
        boostThreshold: 100,
        borderWidth: 0,
        nullColor: '#EFEFEF',
        colsize: 24 * 36e5, // one category
        tooltip: {
                headerFormat: 'X: categories <br/>', 'Y:Actual/ Synthetic '
                },
            }]   
        
            }
        });
    });

});
