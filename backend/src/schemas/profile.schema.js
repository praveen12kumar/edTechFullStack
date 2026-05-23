const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE', 'OTHER'],
        default: 'MALE',
    },
    dateOfBirth: {
        type: Date,
    },
    about: {
        type: String,
        trim: true,
        maxlength: [200, 'About should not be more than 200 characters'],
    },
    address: {
        type: String,
        trim: true,
        maxlength: [200, 'Address should not be more than 200 characters'],
    },
    contactNumber: {
        type: String,
        trim: true,
        maxlength: [20, 'Contact number should not be more than 20 characters'],
    },
});

module.exports = mongoose.model('Profile', profileSchema);
