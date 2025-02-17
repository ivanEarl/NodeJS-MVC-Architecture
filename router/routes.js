const express = require('express');
const validateQuery = require('../middleware/validateRoute');
const router = express.Router();
const todo = require('../controller/todoController')

router.get('/', (req, res) => {
    res.redirect('/api/todos');
});

router.get('/api/todos', todo.getTodos);

router.post('/api/add', todo.addTodo);

router.patch('/api/update', todo.updateTodo);

router.delete('/api/delete', todo.deleteTodo);

module.exports = router;