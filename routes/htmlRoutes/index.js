const router = require('express').Router();

const galleryRoutes = require('./gallery');
const loginRoutes = require('./login');

router.use('/', loginRoutes);
router.use('/gallery', galleryRoutes);




module.exports = router;