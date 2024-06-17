import { Router } from 'express';
import { submitArticle, fetchAllArticles, fetchQuestionsAndAnswers } from '../controllers/articleController';

const router = Router();

router.post('/articles', submitArticle);
router.get('/articles', fetchAllArticles);
router.get('/questions-answers', fetchQuestionsAndAnswers);

export default router;
