const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.patch('/:id/block', userController.blockUser);
router.patch('/:id/unblock', userController.unblockUser);

module.exports = router;
