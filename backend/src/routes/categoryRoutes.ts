import { Router } from 'express';
import { addCategory, getAllCategories } from '../controllers/categoryController';

const router = Router();

router.post('/categories', addCategory);
router.get('/categories', getAllCategories);

export default router;
