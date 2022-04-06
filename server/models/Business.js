const mongoose = require('mongoose');

const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

const businessSchema = new Schema({
    createdDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    owner: {
        type: String,
        trim: true,
    },
    experience: [
        {
            workType: {
                type: String,
                required: true,
            },

            workDescription: {
                type: String,
                maxlength: 500,
                required: true,
            },
            workImages: {
                type: [String],
                default: [],
            },
        },
    ],
    avgScore: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    reviews: [
        {
            reviewText: {
                type: String,
                required: 'You need to leave a thought!',
                minlength: 1,
                maxlength: 280,
                trim: true,
            },
            reviewAuthor: {
                type: String,
                required: true,
                trim: true,
            },
            reviewScore: {
                type: Number,
                default: 0,
                min: 0,
                max: 5,
            },
            createdDate: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],
    experience: [
        {
            workType: {
                type: String,
                required: true,
            },

            workDescription: {
                type: String,
                maxlength: 500,
                required: true,
            },
            workImages: {
                type: [String],
                default: [],
            },
        },
    ],
    avgScore: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
