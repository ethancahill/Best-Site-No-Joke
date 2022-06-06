const router = require('express').Router();
const dadJoke = require('@mikemcbride/dad-jokes')

// generates random dad joke
router.get('/dadjoke', (req, res) => {
    res.json( { joke: dadJoke.random()})
})

router.get('/', (req,res) => {
    res.render("generate", {
        generateCSS: true
    })
})

module.exports = router;