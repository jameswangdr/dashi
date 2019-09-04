const db = require('../models');
const { sendErrorResponse, sendSuccessResponse } = require('./response')

const index = (req, res) => {
    db.Dash.find({}).exec((error, foundAllDashi) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, foundAllDashi);
    });
};

const show = (req, res) => {
    db.Dash.findById(req.params._id, (error, foundDash) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, foundDash);
    });
};

const create = (req, res) => {
    db.Dash.create(req.body, (error, createdDash) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, createdDash);
        db.User.findById(req.body.userId, { password: 0 }, (error, foundUser) => {
            if (error) return sendErrorResponse(res, error);
            db.Dash.user = foundUser;
            createdDash.save();
            // db.Dash.findById(createdPost._id).populate('user').populate('dash')
            //     .exec((error, foundPost) => {
            //         if (error) return sendErrorResponse(res, error);
            //         sendSuccessResponse(res, foundPost);
        });
    });
};

const update = (req, res) => {
    db.Dash.findByIdAndUpdate(req.params._id, req.body, { new: true }, (error, updatedDash) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, updatedDash);
    });
};

const destroy = (req, res) => {
    db.Dash.findByIdAndDelete({ _id: req.params._id }, (error, deletedDash) => {
        if (error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, deletedDash);
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
