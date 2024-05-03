const express = require('express')
const { fetchClient, createClient, updateClient, deleteClient } = require('../controller/client.controller')

const router = express.Router()


/**
 * @swagger
 * /clients/fetchClient:
 *   get:
 *     tags: [clients]
 *     summary: return all clients
 *     responses: 
 *       200:
 *         description: bingo
 */
router.get("/fetchClient",fetchClient)
/**
 * @swagger
 * /clients/createClient:
 *   post:
 *     tags : [clients]
 *     summary: post a client
 *     requestBody:
 *       description: add a client
 *       required: true 
 *       content:
 *         application/json:
 *           schema:
 *             type: object 
 *             properties:
 *               id:
 *                 type: number
 *               name:
 *                 type: string 
 *               email: 
 *                 type: string
 *               password: 
 *                 type: string
 *               imageUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: client created with success       
 */
router.post("/createClient",createClient)
router.put("/updateClient/:id",updateClient)
/**
 * @swagger
 * /clients/deleteClient/{id}:
 *   delete:
 *     tags: [clients]
 *     summary: delete a client 
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       202: 
 *         description: client deleted 
 *       500:
 *         description : client not found 
 *     
 */
router.delete("/deleteClient/:id",deleteClient)

module.exports = router