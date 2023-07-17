// createCharacter=() => {
//   const name = process.argv[2];
//   const selectedClass = process.argv[3];
//   const selectedRace = process.argv[4]
//   const selectedSpell = process.argv[5]
//   const selectedEquipment = process.argv[6]

//   fetch("https://www.dnd5eapi.co/api/classes/" + selectedClass)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       console.log("Class: " + data.name + " Hit Die: " + data.hit_die);
//     })
//     .catch(function(er) {
//       console.log(er);
//     });

//   console.log("Name: " + name);

//   fetch("https://www.dnd5eapi.co/api/races/" + selectedRace)
//   .then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     console.log("Race: " +data.name)
//     console.log("Alignment: " + data.alignment)
//     console.log("Language: "+data.language_desc)
//   }).catch(function(er) {
//     console.log(er)
//   })
//   fetch("https://www.dnd5eapi.co/api/spells/" + selectedSpell)
//   .then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     console.log("Spell: " + data.desc)
//   }).catch(function(er) {
//     console.log(er)
//   })
//   fetch("https://www.dnd5eapi.co/api/equipment/" + selectedEquipment)
//   .then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     console.log("Equipment: " + data.index)
//     console.log("Weight: " + data.weight)
//   }).catch(function(er) {
//     console.log(er)
//   })
// }
// createCharacter();


const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
router.use('/users', userRoutes);
router.use('/characters', characterRoutes);

module.exports = router;
