const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: 
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    dash: 
        {
            type: Schema.Types.ObjectId,
            ref: 'Dash',
        },
    content: {
        type: String,
        required: true,
        maxlength: [300, 'Max length exceeded'],
    },
    likes: {
        type: Number,
        default: 0,
    },
    date_posted: {
        type: Date,
        default: Date.now,
    },

})

const Post = mongoose.model('Comment', commentSchema);

module.exports = Comment;