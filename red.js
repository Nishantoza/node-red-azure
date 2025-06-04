const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/",
  httpNodeRoot: "/",
  userDir: "data",
  functionGlobalContext: {},
};

RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(process.env.PORT || 80);
RED.start();
