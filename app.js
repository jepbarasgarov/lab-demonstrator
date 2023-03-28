const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health-check') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('OK');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});