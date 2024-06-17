import { Request, Response } from 'express';
import { createArticle, getAllArticles, getQuestionsAndAnswers } from '../models/articleModel';

export const submitArticle = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const article = await createArticle(title, content);
  if (article) {
    res.json({ success: true, article });
  } else {
    res.json({ success: false });
  }
};

export const fetchAllArticles = async (req: Request, res: Response) => {
  const articles = await getAllArticles();
  res.json(articles);
};

export const fetchQuestionsAndAnswers = async (req: Request, res: Response) => {
  const questionsAndAnswers = await getQuestionsAndAnswers();
  res.json(questionsAndAnswers);
};
