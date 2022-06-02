const router = require('express').Router();

const res = require('express/lib/response');
const galleryRoutes = require('./gallery');
const loginRoutes = require('./login');

router.use('/', loginRoutes);
router.use('/gallery', galleryRoutes);


router.use('/login', loginRoutes)
router.use('/signup', (req,res)=>res.render('signup'));


module.exports = router;