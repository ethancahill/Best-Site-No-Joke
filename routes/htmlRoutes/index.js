const router = require('express').Router();

const galleryRoutes = require('./gallery');
const generateRoutes = require('./generate');
const loginRoutes = require('./login')

router.use('/login', loginRoutes);
router.use('/gallery', galleryRoutes);
router.use('/generate', generateRoutes);



module.exports = router;