const Product = require('../models/product'),
    Category = require('../models/category'),
    Manufacturer = require('../models/manufacturer'),
    BaseCtrl = require('./BaseCtrl');

class ProductCtrl extends BaseCtrl {

    constructor(model) {
        super(model);
    }

    createEntity(req, res){

        let product = new Product(req.body);
    
        product.save((err, data) => {
            if (err) {
                return res.status(400).json({ message: "Error create", err });
            }
            res.json({ 
                message: "Created",
                data
            });
        });
    }

    updateEntity(req, res, next){

        let reqBody = req.body;

        Product.findByIdAndUpdate(req.params.id, reqBody,  {runValidators: true}, (err, data) => {
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

    async getById(req, res){

        try {
            let prod = await Product.findById(req.params.id),
                manuf = await Manufacturer.findById(prod.manufacturer),
                cat = await Category.findById(prod.category);
                
                res.json({
                    ...prod.toObject(),
                    category: {
                        id: cat._id,
                        title: cat.title
                    },
                    manufacturer: {
                        id: manuf._id,
                        title: manuf.title 
                    }
                });
            
        } catch (err) {
            res.status(400).json({ message: "Error get", err });
        } 
    }
}

module.exports = new ProductCtrl(Product);