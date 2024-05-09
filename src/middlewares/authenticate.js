
require('dotenv').config();
const jwt = require("jsonwebtoken");
const createError = require('../utils/create-error');

const authenticate = async ( req, res, next ) => {
    try {

        const { authorization } = req.headers;

        if (!authorization){
            return createError(400, "Unauthorized");
        }

        const arrayToken = authorization.split(" ");
        const token = arrayToken[1];

        if (arrayToken[0] !== "Bearer" || !token){
            return createError(400, "Unauthorized")
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET);

        if (typeof payload !== "object" || !payload?.data){
            return createError(400, "Payload not in correct format")
        }

        const user = payload;

        if (!user){
            return createError(400, "User is not found");
        }

        req.user = user;
        next();

    }catch(err){
        next(err);
    };
};

module.exports = authenticate;