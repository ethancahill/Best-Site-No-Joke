const router = require('express').Router();

const galleryRoutes = require('./gallery');
const generateRoutes = require('./generate');
const loginRoutes = require('./login')

router.use('/gallery', galleryRoutes);
router.use('/generate', generateRoutes);
router.use('/login', loginRoutes)


module.exports = router;