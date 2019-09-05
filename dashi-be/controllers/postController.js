const db = require('../models');
const { sendErrorResponse, sendSuccessResponse } = require('./response')

const index = (req, res) => {
    db.Post.find({}).exec((error, foundAllPosti) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, foundAllPosti);
    });
};

const show = (req, res) => {
    db.Post.findById(req.params._id, (error, foundPost) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, foundPost);
    });
};

const create = (req, res) => {
    db.Post.create(req.body, (error, createdPost) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, createdPost);
        db.User.findById(req.body.userId, { password: 0 }, (error, foundUser) => {
            if (error) return sendErrorResponse(res, error);
            db.Post.user = foundUser;
            createdPost.save();
            // db.Post.findById(createdPost._id).populate('user').populate('Post')
            //     .exec((error, foundPost) => {
            //         if (error) return sendErrorResponse(res, error);
            //         sendSuccessResponse(res, foundPost);
        });
    });
};

const update = (req, res) => {
    db.Post.findByIdAndUpdate(req.params._id, req.body, { new: true }, (error, updatedPost) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, updatedPost);
    });
};

const destroy = (req, res) => {
    db.Post.findByIdAndDelete({ _id: req.params._id }, (error, deletedPost) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, deletedPost);
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
