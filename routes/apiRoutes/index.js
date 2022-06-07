const router = require('express').Router();

const userRoutes = require('./user-routes');
const jokeRoutes = require('./joke-routes');
// const generateRoutes = require('./generate');

router.use('/users', userRoutes);
router.use('/jokes', jokeRoutes);
// router.use('/generate', generateRoutes);


module.exports = router;