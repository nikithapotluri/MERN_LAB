let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function (req, res) {
  // Parse the URL
  var q = url.parse(req.url, true);
  console.log(req.url);
  
  // Define the file path dynamically using URL pathname
  var filename = "." + q.pathname;
  
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    }
    
    // Send file content as response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Read operation:</h1>');
    res.write(data);

    // Perform the write operation
    fs.writeFile(filename, "<h3>I'm writing in this file..!</h3>", function (err) {
      if (err) {
        res.write('<h1>Write operation failed!</h1>');
        return res.end();
      }
      
      res.write('<h1>Write operation:</h1>');
      res.write("<h3>Data successfully written to the file!</h3>");
      return res.end();
    });
  });
}).listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});