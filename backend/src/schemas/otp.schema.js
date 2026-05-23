const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
    },
    otp: {
        type: String,
        required: [true, 'OTP is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 15 * 60,
    },
});

module.exports = mongoose.model('Otp', otpSchema);
