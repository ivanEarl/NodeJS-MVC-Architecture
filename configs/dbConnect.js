const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root', // Default user for XAMPP MySQL
    password: '',  // Default password for XAMPP MySQL (empty by default)
    database: 'todo_db', // Replace with your actual database name
};

// Function to get a direct connection to the database
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