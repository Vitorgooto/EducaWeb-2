import pool from './db';

export const findUserByUsername = async (username: string) => {
  const res = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  return res.rows[0];
};

export const createUser = async (username: string, password: string) => {
  const res = await pool.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    [username, password]
  );
  return res.rows[0];
};
