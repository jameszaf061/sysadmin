const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.end('INFT3026 Group Assignment, James, Athanasios, Calvin');
});

server.listen(port, () => {
  console.log('Server running on port 3000');
});
