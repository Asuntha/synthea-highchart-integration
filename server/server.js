//import require modules
var http = require("http");
var fn = require('./javascript');

var server = http.createServer(function(request, response) {
  if(response.statusCode == 200){
        fn.apicall();
  }
});

server.listen(3456);
console.log("Server is listening");