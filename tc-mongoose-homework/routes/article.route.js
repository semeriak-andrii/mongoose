const express = require('express');
const router = express.Router();

const articleController = require('../controllers/article');

router.get('/:id', articleController.getArticleById);
router.get('/', articleController.getArticles);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticleById);
router.delete('/:id', articleController.deleteArticleById);

module.exports = router;