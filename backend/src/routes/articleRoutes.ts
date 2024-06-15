import { Router } from 'express';
import { submitArticle, fetchAllArticles } from '../controllers/articleController';

const router = Router();

router.post('/articles', submitArticle);
router.get('/articles', fetchAllArticles);

export default router;
