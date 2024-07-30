import pool from "../db.js";

export function setScore({ name, points }) {
  //   await
  pool.query(`INSERT INTO scores (name, points) VALUES ($1, $2) RETURNING *`, [
    name,
    points,
  ]);
}
