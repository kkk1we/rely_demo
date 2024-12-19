var http = require('http');
var dt = require('./module');
var url = require('url');
var fs = require('fs')
let port = 8080;
const express = require('express');
const app = express();
const path = require('path');



app.use('/static', express.static(path.join(__dirname, 'assets')))
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
// http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.write("The date and time are currently: " + dt.myDateTime());
// //   res.end('Hello World!');

// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.write(req.url);
// //   res.end();

// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   var q = url.parse(req.url, true).query;
// //   var txt = q.year + " " + q.month; 
// //   res.end(txt);

//     fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);





console.log(`Server running at http://localhost:${port}`)