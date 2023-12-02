// Importa o ObsModel
const obsModel = require('./obsModel')
const axios = require('axios');

// Processa a request de consultar e retorna uma response em JSON
const getAll = async (request, response) => {
    const obs = await obsModel.getAll()
    return response.status(200).json(obs)
}

// Processa a request de criar e retorna uma response em JSON
const createObs = async (request, response) => {
    const createdObs = await obsModel.createObs(request.body)

    await axios.post("http://localhost:10000/eventos", {
        tipo: "ObservacaoCriada",
    });

    return response.status(201).json(createdObs)
}

// Processa a request de deletar e retorna uma response em JSON
const deleteObs = async (request, response) => {
    const { id } = request.params

    await obsModel.deleteObs(id)
    return response.status(204).json()
}

// Processa a request de atualizar e retorna uma response em JSON
const updateObs = async (request, response) => {
    const { id } = request.params

    await obsModel.updateObs(id, request.body)
    return response.status(204).json()
}

// Exporta as ações
module.exports = {
    getAll,
    createObs,
    deleteObs,
    updateObs
}