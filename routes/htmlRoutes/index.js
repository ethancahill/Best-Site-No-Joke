const router = require('express').Router();

const galleryRoutes = require('./gallery');
const loginRoutes = require('./login');
const generateRoutes = require('./generate');

router.use('/login', loginRoutes);
router.use('/gallery', galleryRoutes);
router.use('/generate', generateRoutes);


// router.use('/login', loginRoutes)
router.use('/signup', (req,res)=>res.render('signup'));


module.exports = router;