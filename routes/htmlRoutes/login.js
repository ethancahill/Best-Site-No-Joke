const router = require('express').Router();
const { Joke, User } = require('../../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
    try {
      res.render('login', {
        // loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



  module.exports = router;