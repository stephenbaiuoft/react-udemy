module.exports = (req, res, next) => {
    // sanity check of less than 1, then we would log you out
    if (req.user.credits < 1) {
        // 403 meaning forbidden
        return res.status(403).send( {
            error: 'Not enough credits!'
        }); 
    }

    // call next as this is a middleware function
    next();
}