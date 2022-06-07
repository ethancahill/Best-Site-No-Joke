const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/generate.html'));
});

router.get('/', (req,res) => {
    res.render("generate", {
        generateCSS: true
    })
})

module.exports = router;