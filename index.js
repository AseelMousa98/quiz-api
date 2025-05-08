const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("questions.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 9000;
const host = "0.0.0.0";

server.listen(port, host, () => {
  console.log(`JSON Server is running on http://${host}:${port}`);
});
