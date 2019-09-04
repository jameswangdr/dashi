const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dashSchema = new Schema ({
    user: 
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    content: {
        type: String,
        required: true,
        maxlength: [300, 'Max length exceeded'],
    },
    img: {
        data: Buffer, 
        contentType: String // cloundinary.com?
    },
    recent_comments: [],
    likes: {
        type: Number,
        default: 0,
    },
    date_posted: {
        type: Date,
        default: Date.now,
    },
});

const Dash = mongoose.model('Dash', dashSchema);

module.exports = Dash;