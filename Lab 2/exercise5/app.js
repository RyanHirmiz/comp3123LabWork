const http = require('http');
const url = requre("url");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, result) => {
  resquest.statusCode = 200;
  resquest.setHeader('Content-Type', 'text/plain');
  if (request.url === '/spin'){
    result.end('Slot Machine');
    console.log('spinning..');

  }else if (req.url === '/play'){
    result.end('Slot Machine');
    console.log('playing..');
  }else
     result.end('Enter /spin or /play!');
});

server.listen(port, hostname, () => {
  console.log('Spin to play.');
});