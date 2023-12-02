// Importa o TasksModel
const tasksModel = require('./tasksModel')
const axios = require('axios');

// Processa a request de consultar e retorna uma response em JSON
const getAll = async (request, response) => {
    const tasks = await tasksModel.getAll()
    return response.status(200).json(tasks)
}

// Processa a request de criar e retorna uma response em JSON
const createTask = async (request, response) => {
    const createdTask = await tasksModel.createTask(request.body)

    await axios.post("http://localhost:10000/eventos", {
        tipo: "LembreteCriado"
    });
    
    return response.status(201).json(createdTask)
}

// Processa a request de deletar e retorna uma response em JSON
const deleteTask = async (request, response) => {
    const { id } = request.params

    await tasksModel.deleteTask(id)
    return response.status(204).json()
}

// Processa a request de atualizar e retorna uma response em JSON
const updateTask = async (request, response) => {
    const { id } = request.params

    await tasksModel.updateTask(id, request.body)
    return response.status(204).json()
}

// Exporta as ações
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}