
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const notFoundHandler = require('./middlewares/notFound');
const apiLogin = require('./routes/auth-route');
const errorHandler = require('./middlewares/error');
const dataRoute = require('./routes/data-route');
const web = express();

const port = process.env.PORT;

web.use(cors());
web.use(express.json());

web.use("/api", apiLogin)

web.use("/api", dataRoute)

web.listen(port, () => {
    console.log("\n Server is running on Port " + port + ` http://localhost:${port} \n`)
})

web.use(errorHandler)
web.use('*', notFoundHandler)