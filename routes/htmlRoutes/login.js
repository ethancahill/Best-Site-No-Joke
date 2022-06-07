const router = require("express").Router();
const { Joke, User } = require("../../models");
const path = require("path");

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/generate");
    return;
  } else {
    res.render("login");
    return;
  }
});

module.exports = router;
