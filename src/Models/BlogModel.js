const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const BlogSchema = new mongoose.Schema({

    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    AuthorId: {
        type: ObjectId,
        ref: "Author",
        required: true
    },
    tags:
        [{
            type: String

        }],
    category: [{
        type: String,
        required: true
    }],
    subcategory:
        [{
            type: String
        }],
    isDeleted: {
        type: Boolean,
        default: false
    },
    isPublished: {
        type: Boolean,
        default: false
    }


}, { timestamps: true })
module.exports = mongoose.model('Blog', BlogSchema)