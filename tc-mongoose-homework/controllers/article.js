const Article = require("../models/article")
const User = require("../models/user")

const ArticleController = {
    getArticles: async (req, res, next) => {
        const title = req.query.title ? req.query.title : '';
        const subtitle = req.query.subtitle ? req.query.subtitle : '';
        const description = req.query.description ? req.query.description : '';
        const category = req.query.category ? req.query.category : '';
        const articles = await Article.getArticles(title, subtitle, description, category).catch(next);
        res.json(articles);
    },
    getArticleById: async (req, res, next) => {
        const article = await Article.getArticleById(req.params.id).catch(next)
        res.json(article);
    },
    createArticle: async (req, res, next) => {
        const article = await Article.addArticle(req.body).catch(next);
        const user = await User.getUserById(req.body.owner);
        user.numberOfArticles++;
        await User.updateUserById(user, req.body.owner);
        res.json(article);
    },
    updateArticleById: async (req, res, next) => {
        const article = await Article.updateArticleById(req.body, req.params.id).catch(next);
        res.json(article);
    },
    deleteArticleById: async (req, res, next) => {
        const article = await Article.deleteArticleById(req.params.id).catch(next);
        const user = await User.getUserById(article.owner);
        user.numberOfArticles--;
        await User.updateUserById(user, req.body.owner);
        res.json({ deleted: true });
    },
}
module.exports = ArticleController;