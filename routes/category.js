const router = require('express').Router(),
    ctrl = require('../controllers/CategoryCtrl');

router.post('/', ctrl.createEntity);

router.get('/all', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.put('/:id', ctrl.updateEntity);

router.delete('/:id', ctrl.deleteById);

module.exports = router;