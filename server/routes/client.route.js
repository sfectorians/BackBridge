const express = require('express')
const { fetchClient, createClient, updateClient, deleteClient } = require('../controller/client.controller')

const router = express.Router()


router.get("/fetchClient",fetchClient)
router.post("/createClient",createClient)
router.put("/updateClient/:id",updateClient)
router.delete("/deleteClient/:id",deleteClient)

module.exports = router