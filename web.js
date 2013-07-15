var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  fs.readFileSync('index.html', 'utf8', function (err, data) {
    if (err) throw err;
    buf = new Buffer(512);
    len = buf.write(data, 0);
    var dec_data = buf.toString('utf8', 0, len);
    console.log(len + " bytes: " + dec_data);
    response.send(dec_data);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
