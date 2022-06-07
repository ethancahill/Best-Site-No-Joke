const path = require('path');
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

const exphbs = require("express-handlebars");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

// set up sessions
const sess = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening on http://localhost:" + PORT));
});
