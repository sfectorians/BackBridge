const { clients } = require("../models/client.model");




const fetchClient =  (req, res) => {
    res.status(200).send(model.clients);
  }
  
 const createClient = (req, res) => {
    clients.push(req.body);
    res.status(201).send(clients);
  }
  
 const deleteClient = (req, res) => {
    const { id } = req.params;

    clients.forEach((e, i) => {
      e.id === +id && clients.splice(i, 1) 
    });

    res.status(202).send(clients);
  }


  const updateClient = (req, res) => {
    const { id } = req.params;
    console.log(req.body, "this is the body ");
    let index = 0;
    for (let i = 0; i < clients.length; i++) {
      clients[i].id === +id && (index = i);
    }
    clients.splice(index, 1, req.body);
    res.status(201).send(clients);
  }


module.exports =  {deleteClient , updateClient , createClient,fetchClient}