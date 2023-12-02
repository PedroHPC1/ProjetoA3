// Valida os dados necessários para realizar um post de tarefa (id_evento e texto)
const validatePost = (request, response, next) => {
    const { body } = request

    if (body.id_evento == undefined) {
        return response.status(400).json({ message: 'The field "id_evento" is required'})
    }

    if (body.id_evento == '') {
        return response.status(400).json({ message: 'id_evento cannot be empty'})
    }

    if (body.texto == undefined) {
        return response.status(400).json({ message: 'The field "texto" is required'})
    }

    if (body.texto == '') {
        return response.status(400).json({ message: 'texto cannot be empty'})
    }

    next()
}

// Valida os dados necessários para realizar um put de observação (texto)
const validatePut = (request, response, next) => {
    const { body } = request

    if (body.texto == undefined) {
        return response.status(400).json({ message: 'The field "texto" is required'})
    }

    if (body.texto == '') {
        return response.status(400).json({ message: 'texto cannot be empty'})
    }

    next()
}

// Exporta as validações
module.exports = {
    validatePost,
    validatePut
}