const User = require("../models/user")
const Article = require("../models/article")



const UserController = {
  getUserArticlesById: async (req, res, next) => {
    const articles = await Article.getArticleByOwner(req.params.id).catch(next)
    res.json(articles);
  },
  getUserById: async (req, res, next) => {
    const user = await User.getUserById(req.params.id).catch(next)
    const articles = await Article.getArticleByOwner(req.params.id).catch(next)
    res.json({user, articles});
  },
createUser: async (req, res, next)=>{
  const user = await User.addUser(req.body).catch(next)
    res.json(user);
},
updateUserById:async(req, res, next)=>{
  const user = await User.updateUserById(req.body, req.params.id).catch(next)
    res.json(user);
},
  deleteUserById: async (req, res, next) => {
    await User.deleteUserById(req.params.id).catch(next)
    res.json({deleted:true});
  },
}
module.exports = UserController;

