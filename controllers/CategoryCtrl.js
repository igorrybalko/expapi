const Category = require('../models/category'),
    BaseCtrl = require('./BaseCtrl');

class CategoryCtrl extends BaseCtrl {

    constructor(model) {
        super(model);
    }

    createEntity(req, res){

        let category = new Category({
            title: req.body.title
        });
    
        category.save((err, data) => {
            if (err) {
                return res.status(400).json({ message: "Error create category", err });
            }
            res.json({ 
                message: "Category was created",
                data
            });
        });
    }

    updateEntity(req, res){

        let reqBody = {title: req.body.title};

        Category.findByIdAndUpdate(req.params.id, reqBody,  {runValidators: true}, (err, data) => {
            if (err) return res.status(400).json({ message: "Error update", err });

            res.json({
                message: "Updated",
                id: data._id
            });
        });
    }
}

module.exports = new CategoryCtrl(Category);