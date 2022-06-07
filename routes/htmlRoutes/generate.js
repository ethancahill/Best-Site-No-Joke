const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/generate.html'));
});

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