const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const FormModel = mongoose.model("test", formSchema); // Using "test" as collection name
module.exports = FormModel;
