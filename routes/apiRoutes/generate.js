const router = require('express').Router();
const dadJoke = require('@mikemcbride/dad-jokes')

// generates random dad joke
router.get('/dadjoke', (req, res) => {
    res.json( { joke: dadJoke.random()})
})

module.exports = router;