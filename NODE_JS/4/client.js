const http = require('http'); 
const options = {
  hostname: 'localhost', // The server's hostname
  port: 3000,            // The server's port
  path: '/',             // The path to request
  method: 'GET',         // HTTP method (GET request)
};
const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(`Server response: ${data}`);
  });
});
req.on('error', (e) => {
  console.error(`Problem with the request: ${e.message}`);
});
req.end();
