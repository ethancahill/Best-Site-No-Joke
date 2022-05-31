const router = require('express').Router();

const galleryRoutes = require('./generate');
const generateRoutes = require('./gallery');
const loginRoutes = require('./login')

router.use('/gallery', galleryRoutes);
router.use('/generate', generateRoutes);
router.use('/login', loginRoutes)


module.exports = router;