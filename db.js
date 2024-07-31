import pg from "pg";
const { Pool } = pg;
import "dotenv/config";

const { DB_HOST, DB_PORT, DB_PASSWORD, DB_USER, DB_NAME } = process.env;

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
});

export default pool;
