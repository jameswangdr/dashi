const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.posts.index);
router.get('/:name', ctrl.posts.show);
router.post('/', ctrl.posts.create);
router.post('/:_id', ctrl.posts.update);
router.delete('/:_id', ctrl.posts.destroy);

module.exports = router;
