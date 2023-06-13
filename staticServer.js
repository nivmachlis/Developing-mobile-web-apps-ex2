const staticService = require('./staticService');

function handleRequest(rootDirectory, req, res) {
  const requestUrl = req.url;

  staticService.serveStaticDirectory(rootDirectory, requestUrl, (error, fileStream) => {
    if (error) {
      res.statusCode = 404;
      res.end(error);
    } else {
      res.statusCode = 200;
      fileStream.pipe(res);
    }
  });
}

module.exports = {
  handleRequest
};
