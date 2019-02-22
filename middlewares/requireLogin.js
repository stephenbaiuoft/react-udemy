// commonJs syntax for nodejs

// note: next refers to the function that gets called later by adding parentheses: next()
module.exports = (req, res, next) => {
    if (!req.user) {
        res.status(404).send({
            error: 'You must log in!'
        });
    }

    // the logic to go to the next method
    next();
}
