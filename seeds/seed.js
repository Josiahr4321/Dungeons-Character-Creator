const mongoose = require('mongoose');
const Race = require('./models/race');
const Class = require('./models/class');
const Spell = require('./models/spell');
const Equipment = require('./models/equipment');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    seedData();
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Seed data function
async function seedData() {
  try {
    // Seed races
    await Race.insertMany([
      { name: 'Human' },
      { name: 'Elf' },
      { name: 'Dwarf' },
      // Add more races as needed
    ]);
    console.log('Races seeded successfully');

    // Seed classes
    await Class.insertMany([
      { name: 'Fighter' },
      { name: 'Wizard' },
      { name: 'Rogue' },
      // Add more classes as needed
    ]);
    console.log('Classes seeded successfully');

    // Seed spells
    await Spell.insertMany([
      { name: 'Fireball', level: 3, description: 'Deals fire damage to all creatures in an area.' },
      { name: 'Healing Touch', level: 1, description: 'Restores a certain amount of hit points to a target.' },
      { name: 'Invisibility', level: 2, description: 'Renders the caster invisible for a certain duration.' },
      // Add more spells as needed
    ]);
    console.log('Spells seeded successfully');

    // Seed equipment
    await Equipment.insertMany([
      { name: 'Longsword', type: 'Weapon', damage: '1d8 slashing', description: 'A versatile and effective sword.' },
      { name: 'Leather Armor', type: 'Armor', defense: 11, description: 'Light and flexible armor made of leather.' },
      { name: 'Healing Potion', type: 'Consumable', effect: 'Restores 2d4+2 hit points.', description: 'A magical potion that can heal wounds.' },
      // Add more equipment as needed
    ]);
    console.log('Equipment seeded successfully');

    // Disconnect from the database after seeding
    mongoose.disconnect();
    console.log('Seeding completed');
  } catch (error) {
    console.error('Error seeding the data:', error);
  }
}
