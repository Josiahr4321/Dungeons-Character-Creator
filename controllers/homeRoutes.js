const router = require('express').Router();
const { Character } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const characterData = await Character.findAll();

    const characters = characterData.map((character) => character.get({ plain: true }));

    res.render('homepage', {
      characters,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/character/:id', withAuth, async (req, res) => {
  try {
    const characterData = await Character.findByPk(req.params.id, {
      include: [
        {
          model: Character,
          attributes: [
            'id',
            'name',
            'race',
            'class',
            'alignment',
            'spells',
            'equipment',
          ],
        },
      ],
    });

    const character = characterData.get({ plain: true });
    res.render('character', { character, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const newCharacter = await Character.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/character/:id', withAuth, async (req, res) => {
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!characterData) {
      res.status(404).json({ message: 'No character found with this id!' });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
