const fs = require('fs');
const path = require('path');

function serveStaticFile(filePath, callback) {
  const fileStream = fs.createReadStream(filePath);

  fileStream.on('error', (error) => {
    if (error.code === 'ENOENT') {
      callback('File not found', null);
    } else {
      callback('Internal server error', null);
    }
  });

  fileStream.on('open', () => {
    callback(null, fileStream);
  });
}

function serveStaticDirectory(rootDirectory, requestUrl, callback) {
  const filePath = path.join(rootDirectory, requestUrl);

  fs.stat(filePath, (error, stats) => {
    if (error) {
      callback('File not found', null);
      return;
    }
    if (stats.isFile()) {
      serveStaticFile(filePath, callback);
    } else {
      callback('Bad request', null);
    }
  });
}

module.exports = {
  serveStaticDirectory
};
