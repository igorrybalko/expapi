const router = require('express').Router(),
    ctrl = require('../controllers/ProductCtrl');

router.post('/', ctrl.createEntity);

router.get('/:id', ctrl.getById);

router.put('/:id', ctrl.updateEntity);

router.delete('/:id', ctrl.deleteById);

module.exports = router;