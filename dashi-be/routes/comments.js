const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:_id', ctrl.comments.show);
router.post('/', ctrl.comments.create);
router.delete('/:_id', ctrl.comments.destroy);

module.exports = router;