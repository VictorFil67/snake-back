import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "1832",
  host: "localhost",
  port: 5432,
  database: "record_holders",
});

export default pool;
