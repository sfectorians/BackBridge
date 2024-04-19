const http = require("http"); // 1st step http = hyper text transfer protocol
const PORT = 8000;
const host = "127.0.0.1";

const clients = [
  { id: 1, name: "sana" },
  { id: 2, name: "wadie" },
  { id: 3, name: "riadth" },
  { id: 4, name: "meycem" },
  { id: 5, name: "Ghada" }
];
const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/clients") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(JSON.stringify(clients));
  } else if (request.method === "POST" && request.url === "/clients") {
    response.writeHead(201, { "Content-type": "application/json" });
    let body = "";
    request
      .on("data", chunk => {
        console.log(chunk, "this is chunk");
        body += chunk;
      })
      .on("end", () => {
        console.log(typeof body, "this is the body");
        clients.push(JSON.parse(body));
        response.end(JSON.stringify(clients));
      });
  } else if (request.method === "PUT" && request.url.includes("update")) {
    response.writeHead(201, { "Content-Type": "application/json" });
    let params = +request.url.split("/")[2];
    console.log(params, "this is params");

    let index = 0;
    let element = null;
    for (let i = 0; i < clients.length; i++) {
      if (clients[i].id === params) {
        index = i;
        element = clients[i];
      }
    }

    if (!element) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("element not found");
    }
    let body = "";
    request
      .on("data", chunk => {
        console.log(chunk);
        body += chunk;
      })
      .on("end", () => {
        clients.splice(index, 1, JSON.parse(body));
        response.end(JSON.stringify(clients));
      });
  } else if (request.method === "DELETE" && request.url.includes("delete")) {
    response.writeHead(202, { "Content-Type": "application/json" });
    let params = +request.url.split("/")[2];
    console.log(params, "this is params");

    let index = 0;
    let element = null;
    for (let i = 0; i < clients.length; i++) {
      if (clients[i].id === params) {
        index = i;
        element = clients[i];
      }
    }

    if (!element) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("element not found");
    }

    clients.splice(index, 1);
    response.end(JSON.stringify(clients));
  } else {
    response.writeHead(404, { "Content-type": "text/plain" });
    response.end("404 no found");
  }
});
server.listen(PORT, host, () => {
  console.log(`your server is listing to http://${host}:${PORT}`);
});
