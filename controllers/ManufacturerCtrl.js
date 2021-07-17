const Manufacturer = require('../models/manufacturer'),
    BaseCtrl = require('./BaseCtrl');

class ManufacturerCtrl extends BaseCtrl {

    constructor(model) {
        super(model);
    }

    createEntity(req, res){

        let manuf = new Manufacturer({
            title: req.body.title
        });
    
        manuf.save((err, data) => {
            if (err) {
                return res.status(400).json({ message: "Error create manufacturer", err });
            }
            res.json({ message: "Manufacturer was created", data });
        });
    }

    updateEntity(req, res){

        let reqBody = {title: req.body.title};

        Manufacturer.findByIdAndUpdate(req.params.id, reqBody,  {runValidators: true}, (err, data) => {
            if (err) return res.status(400).json({ message: "Error update", err });

            try {

                res.json({
                    message: "Updated",
                    id: data._id
                });

            } catch(err){
                
                next({err, message: "Error update"})
            }
        });
    }
}

module.exports = new ManufacturerCtrl(Manufacturer);