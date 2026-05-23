const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        courseName: {
            type: String,
            required: [true, 'Course title is required'],
            trim: true,
        },
        courseDescription: {
            type: String,
            trim: true,
        },
        instructor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Instructor is required'],
        },
        whatYouWillLearn: {
            type: [String],
            required: [true, 'What you will learn is required'],
        },
        courseContent: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Section',
                required: [true, 'At least one section is required'],
            },
        ],
        ratingAndReviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'RatingAndReview',
            },
        ],
        price: {
            type: Number,
            required: [true, 'Price is required'],
        },
        thumbnail: {
            type: String,
        },
        tags: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tag',
            },
        ],
        studentsEnrolled: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: [true, 'At least one student is required'],
            },
        ],
        courseStatus: {
            type: String,
            enum: ['DRAFT', 'PUBLISHED'],
            default: 'DRAFT',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Course', courseSchema);
