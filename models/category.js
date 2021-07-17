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
    description: {
        type: String,
        maxlength: 1000
    },
    created: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });

module.exports = db.model('Category', schema);