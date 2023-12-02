// Importa o express
const express = require('express')

// Importa o tasksController e tasksMiddleware
const tasksController = require('./tasksController')
const tasksMiddleware = require('./tasksMiddleware')

// Cria uma rota
const router = express.Router()

// Faz as rotas de get, post, delete e put, utilizando os validadores quando necessário
router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMiddleware.validatePost, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id', tasksMiddleware.validatePut, tasksController.updateTask)
router.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

// Exporta as rotas
module.exports = router