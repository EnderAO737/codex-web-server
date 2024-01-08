const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

class webserver {
  constructor(useCompression) {
    this.useCompression = useCompression;
    this.routes = {};
  }

  createRoute(virtualPath, path, contentType) {
    this.routes[virtualPath] = { path, contentType };
  }

  startServer(port) {
    http
      .createServer((req, res) => {
        const route = this.routes[req.url];
        if (!route) {
          res.writeHead(404);
          res.end();
        } else {

          // Read the file

          fs.readFile(route.path, (err, data) => {
            if (this.useCompression) {

              // Compress file and send response

              zlib.gzip(data, (err, data) => {
                if (err) {
                  res.writeHead(404);
                  res.end();
                } else {
                  res.writeHead(200, {
                    "Content-Type": route.contentType,
                    "Content-Encoding": "gzip",
                  });
                  res.write(data);
                  res.end();
                }
              });

            } else {

              // Send non-compressed file

              res.writeHead(200, { "Content-Type": route.contentType });
              res.write(data);
              res.end();

            }
          });
        }
      }).listen(port);
  }
}

module.exports = webserver;
