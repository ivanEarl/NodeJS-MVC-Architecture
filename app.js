const express = require('express');
const app = express();
const port = 3000;
const routes = require('./router/routes');

const logRequests = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logRequests);
app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
    console.log("Server started: Running at port ", port)
});
