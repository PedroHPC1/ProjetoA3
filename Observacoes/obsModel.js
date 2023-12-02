// Cria uma conexão com connection.js para se conectar ao banco de dados
const connection = require ('./connection')

// Busca as observações no banco de dados
const getAll = async () => {
    const [obs] = await connection.execute('SELECT * FROM obs')
    return obs;
}

// Cria uma nova observação no banco de dados
const createObs = async (obs) => {
    const { id_evento, texto } = obs

    const query = 'INSERT INTO obs(id_evento, texto) VALUES (?, ?)'

    const [createdObs] = await connection.execute(query, [id_evento, texto])

    return {insertId: createdObs.insertId}
}

// Deleta uma observação no banco de dados
const deleteObs = async (id) => {
    const removedObs = await connection.execute('DELETE FROM obs WHERE id = ?', [id])
    return removedObs;
}

// Atualiza uma observação no banco de dados
const updateObs = async (id, obs) => {
    const { texto } = obs

    const query = 'UPDATE obs SET texto = ? WHERE id = ?'
    
    const [updatedObs] = await connection.execute(query, [texto, id])

    return updatedObs
}

// Exporta as ações
module.exports = {
    getAll,
    createObs,
    deleteObs,
    updateObs
}