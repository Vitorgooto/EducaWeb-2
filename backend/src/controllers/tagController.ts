import { Request, Response } from 'express';
import { createTag, getTags, addTagToArticle, getArticleTags } from '../models/tagModel';

export const addTag = async (req: Request, res: Response) => {
  const { name } = req.body;
  const tag = await createTag(name);
  res.json(tag);
};

export const getAllTags = async (req: Request, res: Response) => {
  const tags = await getTags();
  res.json(tags);
};

export const linkTagToArticle = async (req: Request, res: Response) => {
  const { article_id, tag_id } = req.body;
  const articleTag = await addTagToArticle(article_id, tag_id);
  res.json(articleTag);
};

export const getTagsForArticle = async (req: Request, res: Response) => {
  const { article_id } = req.params;
  const tags = await getArticleTags(Number(article_id));
  res.json(tags);
};
