const router = require('express').Router();
const { Joke, User } = require('../../models');
const path = require('path');
const sequelize = require('../../config/connection');



router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/generate');
    }
    res.sendFile(path.join(__dirname, '../../public/login.html'));
});



// router.get('/', (req,res)=>res.render('login'))

module.exports = router;