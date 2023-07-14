const router = require('express').Router();
const { Character } = require('../../models');

router.get('/', async (req, res) => {
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
  
  router.delete('/:id', async (req, res) => {
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
  
  module.exports = router;