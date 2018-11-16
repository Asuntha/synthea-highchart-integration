    
    
        $(function () {
                var properties = []; 
                var actual = [];
                var synthetic = [];

                $.getJSON('https://api.myjson.com/bins/pjzbm', function(data) {

                    for (var i = 0; i < data.length; i++) {
                        properties.push(data[i].property);
                        actual.push(data[i].actual);
                        synthetic.push(data[i].synthetic);
                    }

                    Highcharts.chart('container', {
                        title: {
                            text: 'Medication Data Comparision'
                        },
                        xAxis: {
                            categories: properties
                        },
                        series: [{
                            type: 'column',
                            name: 'Actual',
                            data: actual
                        },{
                            type: 'column',
                            name: 'Synthetic',
                            data: synthetic
                        }]
                    });
                });
            });
   