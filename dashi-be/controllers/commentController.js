const db = require('../models');
const { sendErrorResponse, sendSuccessResponse } = require('./response') 

const show = (req, res) => {
    db.Comment.findById({ _id: req.params._id }, (error, foundOneComment) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, foundOneComment);
    });
};

const create = (req, res) => {
    db.Comment.create(req.body, (error, createdComment) => {
        if (error) return sendErrorResponse(res, error);
        db.User.findById(req.body.userId, {password: 0}, (error,foundUser)=>{
            if (error) return sendErrorResponse(res, error);
            db.Comment.user = foundUser
            db.Dash.findById(req.body.dashId, (error,foundDash)=>{
                if (error) return sendErrorResponse(res, error);
                db.Comment.Dash = foundDash

                foundash.recent_comments.push(createdComment);

                createdComment.save();
                db.Comment.findById(createdComment._id).populate('user').populate('Dash')
                    .exec((error, foundComment) => {
                        if (error) return sendErrorResponse(res, error);
                        sendSuccessResponse(res, foundComment);
                });
            });
        });  
    });
};

const destroy = (req, res) => {
    db.Comment.findByIdAndDelete({ _id: req.params._id }, (error, deletedComment) => {
        if (error) return sendErrorResponse( res, error);
        sendSuccessResponse(res, deletedComment);
    })
};

module.exports = {
    // index,
    show,
    create,
    update,
    destroy
};