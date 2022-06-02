const router = require('express').Router();

const galleryRoutes = require('./generate');
const generateRoutes = require('./gallery');
const loginRoutes = require('./login')

router.use('/login', loginRoutes);
router.use('/gallery', galleryRoutes);
router.use('/generate', generateRoutes);



module.exports = router;