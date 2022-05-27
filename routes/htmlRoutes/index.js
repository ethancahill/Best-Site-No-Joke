const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/gallery.html'));
});

router.get('/creations', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/generate.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;