import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    port: 3306,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const getConnection = async () => {
    try {
        const connection = await pool.getConnection();
        return connection;

    } catch (error) {
        console.error('Error getting database connection:', error);
        throw error;
    }
};

export { getConnection };