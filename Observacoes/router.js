// Importa o express
const express = require('express')

// Imporat o obsController e obsMiddleware
const obsController = require('./obsController')
const obsMiddleware = require('./obsMiddleware')

// Cria uma rota
const router = express.Router()

// Faz as rotas de get, post, delete e put, utilizando os validadores quando necessário
router.get('/obs', obsController.getAll)
router.post('/obs', obsMiddleware.validatePost, obsController.createObs)
router.delete('/obs/:id', obsController.deleteObs)
router.put('/obs/:id', obsMiddleware.validatePut, obsController.updateObs)
router.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

// Exporta as rotas
module.exports = router