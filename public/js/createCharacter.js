document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.character-create').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.querySelector('.name-create').value.trim();
    const race = document.querySelector('.race-create').value.trim();
    const clas = document.querySelector('.class-create').value.trim();
    const alignment = document.querySelector('.alignment-create').value.trim();
    const spells = document.querySelector('.spells-create').value.trim();
    const equipment = document.querySelector('.equipment-create').value.trim();

    if (name && race && clas && alignment && spells && equipment) {
      try {
        const response = await fetch('/api/characters', {
          method: 'POST',
          body: JSON.stringify({ name, race, clas, alignment, spells, equipment }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          const newCharacter = await response.json();
          console.log(newCharacter);
          document.location.replace('/');
        } else {
          alert('Failed to create character.');
        }
      } catch (error) {
        console.log('Error creating character:', error);
        alert('Failed to create character. Please check the console for more details.');
      }
    }
  });
});
