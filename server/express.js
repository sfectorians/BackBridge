const express = require("express");
const PORT = 4001;
const host = "127.0.0.1";

const app = express();
app.use(express.json());

const clients = [
  { id: 1, name: "sana" },
  { id: 2, name: "wadie" },
  { id: 3, name: "riadth" },
  { id: 4, name: "meycem" },
  { id: 5, name: "Ghada" }
  
];
app.get("/", (req, res) => {
  res.status(200).send(JSON.stringify(clients));
});

app.post("/client", (req, res) => {
  clients.push(req.body);
  res.status(201).send(clients);
});

app.delete("/client/:id", (req, res) => {
  const { id } = req.params;
  let index = 0;
  for (let i = 0; i < clients.length; i++) {
    clients[i].id === +id && (index = i);
  }
  clients.splice(index, 1);
  res.status(202).send(clients);
});
app.put("/client/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.body, "this is the body ");
  let index = 0;
  for (let i = 0; i < clients.length; i++) {
    clients[i].id === +id && (index = i);
  }
  clients.splice(index, 1, req.body);
  res.status(201).send(clients);
});

app.listen(PORT, () => {
  console.log(`your server is listing to http://${host}:${PORT}`);
});
