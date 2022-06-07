const router = require("express").Router();
const path = require("path");


router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.render("gallery", {
      generateCSS: true,
    });
  } else {
    res.redirect("/login");
  }
});
module.exports = router;
