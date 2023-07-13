const router = require('express').Router();
const { Character } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
      const characterData = await  Character.findAll({
          attributes: { exclude: ['user_id'] },
          order: [['name', 'ASC']],
      });

      const characters = characterData.map((character) => character.get({ plain: true }));

      res.render('homepage', {
          characters,
          logged_in: req.session.logged_in,
      });
  } catch (err) {
      res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;