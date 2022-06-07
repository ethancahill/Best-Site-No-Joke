const router = require('express').Router();
const path = require('path');
const dadJoke = require('@mikemcbride/dad-jokes')


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