// backend/routes/walletRoutes.js
const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

router.post('/credit', walletController.creditWallet);
router.post('/debit', walletController.debitWallet);
router.post('/refund', walletController.refundToWallet);
router.post('/gift', walletController.sendGift);
router.get('/all', walletController.getAllWalletLogs);
router.get('/export', walletController.exportWalletCsv);
router.get('/gifts', walletController.getAllGifts);
router.post('/gifts', walletController.createGift);
router.get('/:userId', walletController.getWallet);

module.exports = router;
