var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200);
    res.write(
    '<html>'
    +'<head>'
     + '<style>'
      + 'table, th, td { border: 1px solid black; padding: 5px; }'
      + 'table { border-spacing: 15px; }'
     +'</style>'
    +'</head>'
    +'<body>'
     +'<h2>Class Schedule</h2>'
      +'<table>'
       +'<tr>'
         +'<th>Classname</th>'
         +'<th>Class Number</th>'
         +'<th>Time</th>'
         +'<th>Day</th>'
       +'</tr>'
       +'<tr>'
         +'<td>Advanced Database</td>'
         +'<td>CIS 445</td>'
         +'<td>9:30 AM</td>'
         +'<td>MW</td>'
       +'</tr>'
       +'<tr>'
         +'<td>Operating Sytems</td>'
         +'<td>CS 420</td>'
         +'<td>12:30 PM</td>'
         +'<td>TTH</td>'
       +'</tr>'
       +'<tr>'
         +'<td>Computer Architecture</td>'
         +'<td>CS 311</td>'
         +'<td>6 PM</td>'
         +'<td>TTH</td>'
       +'</tr>'
    +'</table>'
   +'</body>'
  + '</html>');
            
    res.end();
}).listen(process.env.PORT, process.env.IP);

