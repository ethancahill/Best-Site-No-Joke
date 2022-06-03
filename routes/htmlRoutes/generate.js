const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/generate.html'));
});

module.exports = router;