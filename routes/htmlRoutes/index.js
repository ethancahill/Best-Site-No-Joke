const router = require('express').Router();

const res = require('express/lib/response');
const galleryRoutes = require('./gallery');
const generateRoutes = require('./generate');
const loginRoutes = require('./login')


router.use('/gallery', galleryRoutes);
router.use('/generate', generateRoutes);

router.use('/login', loginRoutes)
router.use('/signup', (req, res) => res.render('signup'));



module.exports = router;