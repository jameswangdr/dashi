const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.dashi.index);
router.get('/:name', ctrl.dashi.show);
router.post('/', ctrl.dashi.create);
router.post('/:_id', ctrl.dashi.update);
router.delete('/:_id', ctrl.dashi.del);

module.exports = router;
