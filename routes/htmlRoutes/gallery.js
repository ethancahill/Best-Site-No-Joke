const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/gallery.html'));
});

router.get('/', (req, res) => {
    res.render("gallery")
})

module.exports = router;