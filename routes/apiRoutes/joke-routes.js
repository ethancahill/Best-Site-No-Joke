const router = require('express').Router();
const { User, Joke } = require('../../models');
const dadJoke = require('@mikemcbride/dad-jokes');


// GET jokes of user
router.get('/', (req, res) => {
    console.log('Getting Jokes===========================')
    Joke.findAll({
        attributes: [
            'id', 'user_id', 'image', 'dad_joke'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// POST selected joke / image / user info to joke table

router.post('/', (req, res) => {
    if (req.session) {
        console.log(req.body);
        console.log(req.session);
        Joke.create({
            image: req.body.image,
            dad_joke: req.body.dad_joke,
            user_id: req.session.user_id,
            username: req.session.username
        })
        .then((dbPostData) => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    }
});


// GET random dad_joke from npm so the front-end can append it to page
router.get('/dadjoke', (req, res) => {
    res.json( { joke: dadJoke.random()})
});



module.exports = router;
