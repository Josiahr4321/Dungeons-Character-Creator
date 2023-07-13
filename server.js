const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Set up Handlebars as the template engine
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// Store created characters
// let characters = [];

// Handle character creation form submission
// app.post('/create-character', (req, res) => {
//   const character = {
//     race: req.body.race,
//     class: req.body.class,
//     spells: req.body.spells,
//     equipment:req.body.equipment,
//   };

//   characters.push(character);

//   // You can perform additional logic or validation here

//   res.json({ message: 'Character created successfully!' });
// });

// fetch('')
//   .then(response => response.json())
//   .then(data => {
//     const races = data.races;
//   });


// Render the homepage view
// app.get('/', (req, res) => {
//   res.render('homepage', { title: 'Homepage' });
// });

// Render the login view
// app.get('/login', (req, res) => {
//   res.render('login', { title: 'Log In' });
// });

// Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
//   connect();
// });
