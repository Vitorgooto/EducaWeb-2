import { Request, Response } from 'express';
import { createCategory, getCategories } from '../models/categoryModel';

export const addCategory = async (req: Request, res: Response) => {
  const { name, parent_id } = req.body;
  const category = await createCategory(name, parent_id);
  res.json(category);
};

export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await getCategories();
  res.json(categories);
};
