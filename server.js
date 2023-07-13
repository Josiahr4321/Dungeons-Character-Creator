const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const { connect } = require('./config/connection');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Store created characters
let characters = [];

// Handle character creation form submission
app.post('/create-character', (req, res) => {
  const character = {
    race: req.body.race,
    class: req.body.class,
    spells: req.body.spells,
    equipment:req.body.equipment,
  };

  characters.push(character);

  // You can perform additional logic or validation here

  res.json({ message: 'Character created successfully!' });
});

fetch('')
  .then(response => response.json())
  .then(data => {
    const races = data.races;
  });


// Render the homepage view
app.get('/', (req, res) => {
  res.render('homepage', { title: 'Homepage' });
});

// Render the login view
app.get('/login', (req, res) => {
  res.render('login', { title: 'Log In' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connect();
});
