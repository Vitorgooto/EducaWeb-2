import pool from './db';

export const createArticle = async (title: string, content: string) => {
  const res = await pool.query(
    'INSERT INTO articles (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  return res.rows[0];
};

export const getAllArticles = async () => {
  const res = await pool.query('SELECT * FROM articles');
  return res.rows;
};

export const getQuestionsAndAnswers = async () => {
  const res = await pool.query('SELECT title AS question, content AS answer FROM articles LIMIT 5');
  return res.rows;
};
