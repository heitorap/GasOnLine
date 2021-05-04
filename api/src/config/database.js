import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
});

export default connection;