const User = require('../models/user');
// const { Order } = require('../models/order');
const { errorHandler } = require('../helpers/dberror.js');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};