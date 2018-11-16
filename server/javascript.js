module.exports = {
    apicall: function () {
        console.log('I am in!!!')
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var ws = new XMLHttpRequest();
        ws.open('GET', "https://api.myjson.com/bins/pjzbm", true);
        ws.send();
        
        ws.addEventListener("readystatechange", processRequest, false);

        ws.onreadystatechange = processRequest;
        
        function processRequest(e) {
            if (ws.readyState == 4 && ws.status == 200) {
                var response = JSON.parse(ws.responseText);
                alert(response);

                for (var i = 0; i < response.length; i++) {
                    properties.push(response[i].property);
                    actual.push(response[i].actual);
                    synthetic.push(response[i].synthetic);
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
            }
        }
    }
}
    
