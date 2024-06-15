import pool from './db';

export const createTag = async (name: string) => {
  const res = await pool.query(
    'INSERT INTO tags (name) VALUES ($1) RETURNING *',
    [name]
  );
  return res.rows[0];
};

export const getTags = async () => {
  const res = await pool.query('SELECT * FROM tags');
  return res.rows;
};

export const addTagToArticle = async (article_id: number, tag_id: number) => {
  const res = await pool.query(
    'INSERT INTO article_tags (article_id, tag_id) VALUES ($1, $2) RETURNING *',
    [article_id, tag_id]
  );
  return res.rows[0];
};

export const getArticleTags = async (article_id: number) => {
  const res = await pool.query(
    'SELECT tags.name FROM tags INNER JOIN article_tags ON tags.id = article_tags.tag_id WHERE article_tags.article_id = $1',
    [article_id]
  );
  return res.rows;
};
