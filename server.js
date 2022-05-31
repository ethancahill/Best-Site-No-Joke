const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));


// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening on PORT ' + PORT));
});
