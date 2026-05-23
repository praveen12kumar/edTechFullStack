const mongoose = require('mongoose');

const subSectionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Subsection title is required'],
        },
        description: {
            type: String,
        },
        videoUrl: {
            type: String,
            required: [true, 'Video URL is required'],
        },
        videoDuration: {
            type: String,
            required: [true, 'Video duration is required'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('SubSection', subSectionSchema);
