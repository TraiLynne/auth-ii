require('dotenv').config();

const jwt = require('jsonwebtoken');
const db = require('../../db/helpers/userModel');

const secret = process.env.JWT_SECRET || 'You\'re my little secret';

const generateToken = user => {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    }

    const options = {
        expiresIn: '1d',
    }

    return jwt.sign(payload, secret, options);
}

const restrictRoute = (req, res, next) => {
    if(token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res
                    .status(401)
                    .json({
                        errorMessage: 'You have no access to this resource'
                    })
            } else {
                next();
            }
        })
    }
}

// const check 

module.exports = {
    generateToken,
    restrictRoute
};