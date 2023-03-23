const mongoose = require("mongoose");
const validator = require("validator");


// schema create

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'email id is already present here'],
        validate(val) {
            if (!validator.isEmail(val)) {

                throw new Error('invalid email')
            }
        }

    },

    phone: {
        type: Number,
        required: true,

    },
    address: {
        type: String,
        required: true,

    }
});
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;