# Codex Web Server

This guide will walk you through the process of setting up and running a Codex Web Server.

## Installation

First, you need to install the npm package. Run the following command in your terminal:

> npm i codex-web-server
 
## Usage

After installation, you can start using the Codex Web Server in your project. First, import the module:

> const codex = require('codex-web-server');

Then, instantiate a server object and specify if you want to enable compression:

> const server = new codex(true);

## Routing

To define routes for your server, use the createRoute method(). This method takes three parameters: the virtual path, the actual path, and the content type. Here's an example:

> server.createRoute('/', 'index.html', 'text/html');

In this example, when users navigate to the root URL ('/'), they will be served the index.html file with a content type of 'text/html'.

## Starting the Server

Finally, to start the server, call the startServer() method with the port number as an argument. For example, to start the server on port 8000, run:

> server.startServer(8000);

Now your Codex Web Server should be up and running!
