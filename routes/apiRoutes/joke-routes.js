const router = require('express').Router();
const { User, Joke } = require('../../models');
const dadJoke = require('@mikemcbride/dad-jokes');

// generates random dad joke
router.get('/dadjoke', (req, res) => {
    res.json( { joke: dadJoke.random()})
});

// GET dad_joke from npm so the front-end can append it to page


// GET jokes of user 


// POST selected joke / image / user info to joke table

router.post("/", function(req, res){
    Joke.create({
        user_id: req.session.user_id,
        image: req.body.image,
        dad_joke: req.body.dad_joke
    }).then((data) => {
        res.json(data)
    });
});

module.exports = router;
