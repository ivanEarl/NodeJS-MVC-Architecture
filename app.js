const express = require('express');
const app = express();
const port = 3000;
const routes = require('./router/routes');

// Custom logging middleware
const logRequests = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware function
};

app.use(logRequests);
app.use(express.json()); // Parse JSON request bodies middleware

app.use('/', routes); //routes

app.listen(port, () => {
    console.log("Server started: Running at port ", port)
});
