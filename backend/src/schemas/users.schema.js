const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true,
            trim: true,
            match: [/^[A-Za-z0-9]+$/, 'Username can only contain letters and numbers'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        avatar: {
            type: String,
        },
        role: {
            type: String,
            enum: ['ADMIN', 'INSTRUCTOR', 'STUDENT'],
            default: 'STUDENT',
            required: [true, 'Role is required'],
        },

        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile',
        },

        courses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
            },
        ],
        courseProgress: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'CourseProgress',
            },
        ],
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', function saveUser(next) {
    const user = this;
    if (!user.avatar || user.isModified('username')) {
        user.avatar = `https://robohash.org/${user.username}`;
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
