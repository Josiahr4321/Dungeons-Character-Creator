document.addEventListener('DOMContentLoaded', function() {
  fetch('https://www.dnd5eapi.co/api/races')
    .then(response => response.json())
    .then(data => {
      const racesDropdown = document.querySelector('select[name="race"]');
      data.results.forEach(race => {
        const option = document.createElement('option');
        option.value = race.index;
        option.text = race.name;
        racesDropdown.appendChild(option);
      });
    })
    .catch(error => {
      console.log('Error fetching races:', error);
    });
});


document.addEventListener('DOMContentLoaded', function() {
  fetch('https://www.dnd5eapi.co/api/classes')
    .then(response => response.json())
    .then(data => {
      const racesDropdown = document.querySelector('select[name="class"]');
      data.results.forEach(race => {
        const option = document.createElement('option');
        option.value = race.index;
        option.text = race.name;
        racesDropdown.appendChild(option);
      });
    })
    .catch(error => {
      console.log('Error fetching classes:', error);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://www.dnd5eapi.co/api/spells')
    .then(response => response.json())
    .then(data => {
      const racesDropdown = document.querySelector('select[name="spells"]');
      data.results.forEach(race => {
        const option = document.createElement('option');
        option.value = race.index;
        option.text = race.name;
        racesDropdown.appendChild(option);
      });
    })
    .catch(error => {
      console.log('Error fetching classes:', error);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://www.dnd5eapi.co/api/alignments')
    .then(response => response.json())
    .then(data => {
      const racesDropdown = document.querySelector('select[name="alignments"]');
      data.results.forEach(race => {
        const option = document.createElement('option');
        option.value = race.index;
        option.text = race.name;
        racesDropdown.appendChild(option);
      });
    })
    .catch(error => {
      console.log('Error fetching classes:', error);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://www.dnd5eapi.co/api/equipment')
    .then(response => response.json())
    .then(data => {
      const racesDropdown = document.querySelector('select[name="equipments"]');
      data.results.forEach(race => {
        const option = document.createElement('option');
        option.value = race.index;
        option.text = race.name;
        racesDropdown.appendChild(option);
      });
    })
    .catch(error => {
      console.log('Error fetching classes:', error);
    });
});
