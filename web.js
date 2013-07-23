var express = require('express');
var app = express();
var page;
var data;
var indexFile = "index.html";
app.use(express.logger());


app.get('/', function(request, response) {
  var fs = require('fs');
  data=fs.readFileSync(indexFile);
  response.send(data.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
