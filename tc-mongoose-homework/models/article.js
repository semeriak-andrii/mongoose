const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: { type: String, minlength: 5, maxlength: 400, required: true, default: "index" },
    // subtitle: { type: String, minlength: 5 },
    // description: { type: String, minlength: 5, maxlength: 5000, required: true },
    owner: { type:Schema.Types.ObjectId, ref:"User", required: true },
    // category: { type: String, enum:['sport','games','history'], require: true },
    // createdAt: { type: Date, required: true },
    // updatedAt: { type: Date, required: true }
});

const Article = module.exports = mongoose.model('Article', ArticleSchema);

module.exports.getArticleById = (id) => {
    return Article.findById(id).populate('owner')
}
module.exports.getArticles = (title, subtitle, description, category) => {
    return Article.find({})
        .where('title').regex(new RegExp(title, 'i'))
        .where('subtitle').regex(new RegExp(subtitle, 'i'))
        .where('description').regex(new RegExp(description, 'i'))
        .where('category').regex(new RegExp(category, 'i'))
        .populate('owner')
}
module.exports.getArticleByOwner = (id) => {
    return Article.find({}).where('owner').equals(id)
}
module.exports.addArticle = (article) => {
    return Article.create(article)
}
module.exports.updateArticleById = (article, id) => {
    return Article.findByIdAndUpdate(id, article, { new: true })
}
module.exports.deleteArticleById = (id) => {
    return Article.findByIdAndDelete(id)
}