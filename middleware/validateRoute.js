// middleware/validateRoute.js
module.exports = function(req, res, next) {
    // Example validation: Check if query parameters are valid
    if (!req.query || Object.keys(req.query).length === 0) {
        return res.status(400).send('Invalid request'); // Send an error if no query params are provided
    }
    next(); // Pass control to the next middleware or route handler
};
