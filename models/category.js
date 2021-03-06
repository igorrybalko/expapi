const db = require('../ext/db');

const schema = new db.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 2,
        unique: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = db.model('Category', schema);