const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Section title is required'],
        },
        description: {
            type: String,
        },
        subSections: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'SubSection',
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Section', sectionSchema);
