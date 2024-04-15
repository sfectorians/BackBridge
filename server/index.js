const http = require("http"); // 1st step http = hyper text transfer protocol
const PORT = 8000;
const host = "127.0.0.1";


const clients = [
  { name: "sana" },
  { name: "wadie" },
  { name: "riadth" },
  { name: "meycem" },
  { name: "Ghada"}
];
const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/clients") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(JSON.stringify(clients));
  }
  if (request.method === "POST" && request.url === "/") {
  }
});
server.listen(PORT, host, () => {
  console.log(`your server is listing to http://${host}:${PORT}`);
});
