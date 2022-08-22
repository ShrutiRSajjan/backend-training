const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    author_id: String,
    authorName: String,
    headQuarter: String

}, { timestamps: true });

module.exports = mongoose.model('Publisherxyz', publisherSchema)
