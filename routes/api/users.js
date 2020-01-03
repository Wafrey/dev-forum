const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

// Load User model
const User = require('../../models/User');

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get('/test', (req, res) => res.json({
    msg: "Users works"
}));

// @route GET api/users/test
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                email: 'Email already exist in database'
            });
        } else {
            const avatar = gravatar.url(req.body.email, {
                s: '250', // Size
                r: 'pg', // Rating
                d: 'mm' // Default
            });

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar: avatar,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) {
                        throw err;
                    } else {
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    }
                })
            })
        }
    })
});

// @route GET api/users/login
// @desc Login user / Returning Json web token
// @access Public
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({
        email: email,
    }).then(user => {
        // Check for user
        if (!user) {
            return res.status(404).json({
                email: 'User not found in db'
            });
        }

        // Check Password
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (isMatch) {
                    // User matched

                    const payload = {
                        id: user.id,
                        name: user.name,
                        avatar: user.avatar
                    } // Create jwt payload

                    // Sign Token
                    jwt.sign(payload, keys.secretOrKey, {
                        expiresIn: 3600
                    }, (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        })
                    });
                } else {
                    return res.status(400).json({
                        password: 'Password or username incorrect'
                    });
                }
            })
    });
});

module.exports = router;