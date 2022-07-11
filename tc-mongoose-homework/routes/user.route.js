const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/:id', userController.getUserById);
router.get('/:id/articles', userController.getUserArticlesById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;