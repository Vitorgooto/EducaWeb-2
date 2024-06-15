import { Router } from 'express';
import { addTag, getAllTags, linkTagToArticle, getTagsForArticle } from '../controllers/tagController';

const router = Router();

router.post('/tags', addTag);
router.get('/tags', getAllTags);
router.post('/article-tags', linkTagToArticle);
router.get('/article-tags/:article_id', getTagsForArticle);

export default router;
