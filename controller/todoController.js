const model = require('../model/todoModel');

const getTodos = async (req, res) => {
    try {
        const todos = await model.getAllTodos();
        res.json(todos);
    } catch (err) {
        console.error('Error[controller>getTodos()]: ', err);
        res.status(500).json({ message: 'Error fetching todos' });
    }
}

const addTodo = async (req, res) => {
    try {
        const todos = await model.createTodo();
        res.redirect('/api/todos');
    } catch (err) {
        console.error('Error[model>addTodo()]: ', err);
        res.status(500).json({ message: 'Error adding todos' });
    }
};

const updateTodo = async (req, res) => {
    try {
        const todos = await model.updateTodo();
        res.redirect('/api/todos');
    } catch (err) {
        console.error('Error[model>updateTodo()]: ', err);
        res.status(500).json({ message: 'Error updating todos' });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const todos = await model.deleteTodo();
        res.redirect('/api/todos');
    } catch (err) {
        console.error('Error[model>updateTodo()]: ', err);
        res.status(500).json({ message: 'Error deleting todos' });
    }
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };