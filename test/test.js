const webserver = require('../index');

const server = new webserver(true);

server.createRoute('/', 'index.html', 'text/html');
server.startServer(8080);