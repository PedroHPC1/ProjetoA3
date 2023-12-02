// Cria uma conexão com connection.js para se conectar ao banco de dados
const connection = require ('./connection')

// Busca as tarefas no banco de dados
const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks')

    return tasks;
}

// Cria uma nova tarefa no banco de dados
const createTask = async (task) => {
    const { nome, data, categoria } = task

    const query = 'INSERT INTO tasks(nome, data, categoria, concluído) VALUES (?, ?, ?, ?)'

    const [createdTask] = await connection.execute(query, [nome, data, categoria, 'false'])

    return {insertId: createdTask.insertId}
}

// Deleta uma tarefa no banco de dados
const deleteTask = async (id) => {
    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id])

    return removedTask
}

// Atualiza uma tarefa no banco de dados
const updateTask = async (id, task) => {
    const { nome, categoria, concluído } = task

    const query = 'UPDATE tasks SET nome = ?, categoria = ?, concluído = ? WHERE id = ?'
    
    const [updatedTask] = await connection.execute(query, [nome, categoria, concluído, id])

    return updatedTask
}

// Exporta as ações
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}