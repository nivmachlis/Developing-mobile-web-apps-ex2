const http = require('http');
const staticController = require('./staticServer');

const port = 8090;
const rootDirectory = __dirname;

const server = http.createServer((req, res) => {
  staticController.handleRequest(rootDirectory, req, res);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
