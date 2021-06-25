class BaseCtrl {

    constructor(model) {
        this.model = model;

        this.getById = this.getById.bind(this);
        this.getAll = this.getAll.bind(this);
        this.deleteById = this.deleteById.bind(this);
    }

    getById(req, res){
        this.model.findById(req.params.id, (err, data) => {
            if (err) return res.status(400).json({ message: "Error get", err });
            res.json(data);
        });
    }

    getAll(req, res){
        this.model.find({}, (err, data) => {
            if (err) return res.status(400).json({ message: "Error get all", err });
            res.json(data);
        });
    }

    deleteById(req, res){
        this.model.findByIdAndRemove(req.params.id, (err, data) => {
            if (err) return res.status(400).json({ message: "Error delete", err });
        
            res.json({
                message: "Deleted"
            });
        });
    }
}

module.exports = BaseCtrl;