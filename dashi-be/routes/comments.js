const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.comments.index);
router.get('/:_id', ctrl.comments.show);
router.comments('/', ctrl.comments.create);
router.put('/:_id', ctrl.comments.update);
router.delete('/:_id', ctrl.comments.del);

module.exports = router;