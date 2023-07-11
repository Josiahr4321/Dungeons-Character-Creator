function createCharacter() {
  const name = process.argv[2];
  const selectedClass = process.argv[3];
  const selectedRace = process.argv[4]
  const selectedalignment = 

  fetch("https://www.dnd5eapi.co/api/classes/" + selectedClass)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("Class: " + data.name + " Hit Die: " + data.hit_die);
    })
    .catch(function(er) {
      console.log(er);
    });

  console.log("Name: " + name);

  fetch("https://www.dnd5eapi.co/api/races/" + selectedRace)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log("Race: " +data.name + " Alignment: " + data.alignment)
  }).catch(function(er) {
    console.log(er)
  })

  fetch("https://www.dnd5eapi.co/api/alignments/" + selectedAlignment)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log("Race: " +data.name + " Alignment: " + data.alignment)
  }).catch(function(er) {
    console.log(er)
  })
}
createCharacter();