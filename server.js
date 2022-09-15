import http from "node:http";
import app from "./lib/app.js";

const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(server.address());
});
