const http = require('http');
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n';
  res.end(msg);
});

// Listen on all available network interfaces
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}/`);
});
