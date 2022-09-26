const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'User'
    },
    department: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'department'
    },
    carrier: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    ttype: {
        type: String,
        required: true,
    },
    ltime: {
        type: String,
        required: true,
    },
    transit: {
        type: String,
        required: true,
    },
    special: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Post', PostSchema)