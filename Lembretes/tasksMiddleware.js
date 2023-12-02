// Valida os dados necessários para realizar um post de tarefa (nome, data e categoria)
const validatePost = (request, response, next) => {
    const { body } = request

    if (body.nome == undefined) {
        return response.status(400).json({ message: 'The field "nome" is required'})
    }

    if (body.nome == '') {
        return response.status(400).json({ message: 'nome cannot be empty'})
    }

    if (body.data == undefined) {
        return response.status(400).json({ message: 'The field "data" is required'})
    }

    if (body.data == '') {
        return response.status(400).json({ message: 'data cannot be empty'})
    }

    if (body.categoria == undefined) {
        return response.status(400).json({ message: 'The field "categoria" is required'})
    }

    if (body.categoria == '') {
        return response.status(400).json({ message: 'categoria cannot be empty'})
    }

    next()
}

// Valida os dados necessários para realizar um put de tarefa (nome, categoria e concluído)
const validatePut = (request, response, next) => {
    const { body } = request

    if (body.nome == undefined) {
        return response.status(400).json({ message: 'The field "nome" is required'})
    }

    if (body.nome == '') {
        return response.status(400).json({ message: 'nome cannot be empty'})
    }

    if (body.categoria == undefined) {
        return response.status(400).json({ message: 'The field "categoria" is required'})
    }

    if (body.categoria == '') {
        return response.status(400).json({ message: 'categoria cannot be empty'})
    }

    if (body.concluído == undefined) {
        return response.status(400).json({ message: 'The field "concluído" is required'})
    }

    if (body.concluído == '') {
        return response.status(400).json({ message: 'concluído cannot be empty'})
    }

    next()
}

// Exporta as validações
module.exports = {
    validatePost,
    validatePut
}