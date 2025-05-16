const express = require('express');
const router = express.Router();
const consultantController = require('../controllers/consultantController');

router.post('/', consultantController.createConsultant);
router.get('/', consultantController.getAllConsultants);
router.get('/:id', consultantController.getConsultantById);
router.put('/:id', consultantController.updateConsultant);
router.patch('/:id/approve', consultantController.approveConsultant);
router.patch('/:id/block', consultantController.blockConsultant);
router.patch('/:id/unblock', consultantController.unblockConsultant);

module.exports = router;
