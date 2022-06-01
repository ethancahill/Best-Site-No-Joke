const router = require('express').Router();

const galleryRoutes = require('./generate');
const generateRoutes = require('./gallery');
const loginRoutes = require('./login')

// index home page
router.use('/', loginRoutes);
// gallery page
// router.use('/gallery', galleryRoutes);
// generate page
// router.use('/generate', generateRoutes);



module.exports = router;