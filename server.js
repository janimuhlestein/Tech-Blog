const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
<<<<<<< Updated upstream
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
=======
>>>>>>> Stashed changes

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(session(sess));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< Updated upstream
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
=======
>>>>>>> Stashed changes

app.use(routes);

sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=> console.log('Now Listening'));
});