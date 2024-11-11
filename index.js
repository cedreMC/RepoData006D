const Jsonserver = require("json-server");
const server = Jsonserver.create();
const router = Jsonserver.router("almacen.json");
const middlewares = Jsonserver.defaults();
const port = process.env.PORT || 10000; 

server.use(middlewares);
server.use(router);
server.listen(port);