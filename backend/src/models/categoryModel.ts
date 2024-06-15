import pool from './db';

export const createCategory = async (name: string, parent_id: number | null) => {
  const res = await pool.query(
    'INSERT INTO categories (name, parent_id) VALUES ($1, $2) RETURNING *',
    [name, parent_id]
  );
  return res.rows[0];
};

export const getCategories = async () => {
  const res = await pool.query('SELECT * FROM categories');
  return res.rows;
};
