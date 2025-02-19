const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root', 
    password: '',  
    database: 'todo_db', 
};

async function getConnection() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Successfully connected to the database!');
        return connection;
    } catch (err) {
        console.error('Error(configs>getConnection): ', err);
        throw err;
    }
}

module.exports = { getConnection };
