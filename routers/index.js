require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const userRoutes = require('./userRouter');
const internalError = 'Houston, we have a problem';
const db = require('../db/helpers/userModel');
const jwt = require('./helpers/jwtModel');

router.use(express.json());

router.post('/register', async (req, res) => {
    let reg = req.body;

    try {
        if(!reg.username || reg.username === ''){
            res
                .status(401)
                .json({
                    errorMessage: 'Please provide a username'
                })
        } else {
            const username = reg.username;
            let user = await db.findBy({username}).first()
            
            if (user) {
                res
                    .status(401)
                    .json(`${username} is already in use`)
            } else {
                if(!reg.department || reg.department === '') {
                    res
                        .status(401)
                        .json({
                            errorMessage: 'Please provide a department name'
                        })
                } else if (!reg.password || reg.password.length < 12){
                    res
                        .status(401)
                        .json({
                            errorMessage: 'Please provide a password'
                        })
                } else {
                    const hash = bcrypt.hashSync(reg.password, 14);
    
                    reg.password = hash;
    
                    const newUser = await db.create(reg);
    
                    newUser ?
                        res
                            .status(201)
                            .json(newUser)
                        :
                        res
                            .status(401)
                            .json({errorMessage: 'There was an error processing our request. Please try again.'})
                }
            }
        }
    } catch (err) {
        res
            .status(500)
            .json(internalError);
    }

});

router.post('/login', async (req, res) => {
    let {
        username,
        password
    } = req.body;

    try {
        let user = await db.findBy({username}).first();

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.generateToken(user);

            res
                .status(200)
                .json({
                    message: `Welcome ${user.username}!, have a token...`,
                    token
                });
        } else {
            res
                .status(401)
                .json({
                    message: 'Invalid Credentials'
                });
        }
    } catch (err) {
        res
            .status(500)
            .json(internalError);
    }
});

router.use('/users', userRoutes);
router.use('/', (req, res) => res.send('Welcome to the Main API'));

module.exports = router;