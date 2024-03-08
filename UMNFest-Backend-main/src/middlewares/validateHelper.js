const mongoose = require('mongoose');

const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: true, message: 'Invalid ID format' });
    }
    next();
};

module.exports = {
    validateObjectId
}