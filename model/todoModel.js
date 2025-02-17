const { getConnection } = require('../configs/dbConnect');
let db;

const initializeDBConnection = async () => {
    db = await getConnection();
};

const getAllTodos = async () => {
    try {
        const [result] = await db.query('SELECT * FROM todos_tbl;');
        return result;
    } catch (err) {
        console.log('Error(model>getAllTodos): ', err);
        throw err;
    }
};

const createTodo = async (res, req) => {
    try {
        const todoName = req.body.todoName;
        const createdDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const updatedDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const [result] = await db.query(
            'INSERT INTO todos_tbl (todo_name, created_date, updated_date) VALUES (?, ?, ?)',
            [todoName, createdDate, updatedDate]
        );
        return result;
    } catch (err) {
        console.error('Error[model>createTodo()]: ', err);
        throw err;
    }
};

const updateTodo = async (req, res) => {
    try {
        const todoId = req.body.id;
        const todoName = req.body.todoName;
        const updatedDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        await db.query(
            'UPDATE todos_tbl SET todo_name = ?, updated_date = ? WHERE todo_id = ?',
            [todoName, updatedDate, todoId]
        );
    } catch (err) {
        console.error("Error[model>updateTodo()]: ", err);
        throw err;
    }
}

const deleteTodo = async (req, res) => {
    try {
        const todoId = 13;
        await db.query(
            'DELETE FROM todos_tbl WHERE todo_id = ?',
            [todoId]
        );
    } catch (err) {
        console.error("Error[model>deleteTodo()]: ", err);
        throw err;
    }
}

initializeDBConnection().catch(err => {
    console.error('Error[model>initializeDB()]: ', err);
});

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };