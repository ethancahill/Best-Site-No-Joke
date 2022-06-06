const router = require('express').Router();
const { Joke, User } = require('../../models');
const path = require('path');
const sequelize = require('../../config/connection');



router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/generate');
        return;
    }
    res.sendFile(path.join(__dirname, '../../public/login.html'));
});


module.exports = router;