const router = require('express').Router(),
    Manufacturer = require('../models/manufacturer');

router.post('/', (req, res) => {

    let manuf = new Manufacturer({
        title: req.body.title
    });

    manuf.save((err) => {
        if (err) {
            return res.status(400).json({ message: "Error create manufacturer", err });
        }
        res.json({ message: "Manufacturer was created" });
    });
});

router.get('/:id', (req, res) => {

    Manufacturer.findById(req.params.id, (err, data) => {
        if (err) return res.status(400).json({ message: "Error get", err });
        res.json(data);
    });
});

router.put('/:id', (req, res) => {

    let reqBody = {title: req.body.title};

    Manufacturer.findByIdAndUpdate(req.params.id, reqBody,  {runValidators: true}, (err, data) => {
        if (err) return res.status(400).json({ message: "Error update", err });

        res.json({
            message: "Updated",
            id: data._id
        });
    });
});

router.delete('/:id', (req, res) => {

    Manufacturer.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) return res.status(400).json({ message: "Error delete", err });
    
        res.json({
            message: "Deleted"
        });
    });
});

module.exports = router;