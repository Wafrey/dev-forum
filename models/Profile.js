const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    compnay: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: [{
        title: {
            type: String,
            required: true
        },
        compnay: {
            type: String,
            required: true
        },
        location: {
            type: String,
        },
        from: {
            type: Date,
            required: true
        },
        to: {
            type: Date,
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String,
        }
    }],
    education: [{
        school: {
            type: String,
            required: true
        },
        degree: {
            type: String,
            required: true
        },
        fieldofstudy: {
            type: String,
            required: true
        },
        from: {
            type: Date,
            required: true
        },
        to: {
            type: Date,
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String,
        }
    }],
    social: {
        youtube: {
            type: String,
            required: true
        },
        twitter: {
            type: String,
            required: true
        },
        facebook: {
            type: String,
            required: true
        },
        linkedin: {
            type: String,
            required: true
        },
        instagram: {
            type: String,
            required: true
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);