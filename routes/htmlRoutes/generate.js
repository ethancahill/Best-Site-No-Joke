const router = require('express').Router();
const dadJoke = require('@mikemcbride/dad-jokes')

// generates random dad joke
router.get('/dadjoke', (req, res) => {
    res.json( { joke: dadJoke.random()})
})

router.get('/', (req,res) => {
    if (req.session.loggedIn) {
    res.render("generate", {
        generateCSS: true
    })
} else {
    res.redirect('/login')
}

})

module.exports = router;