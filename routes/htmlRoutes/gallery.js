const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render("gallery")
})

module.exports = router;