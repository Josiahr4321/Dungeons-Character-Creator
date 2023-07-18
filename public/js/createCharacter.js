const createCharacterFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-create').value.trim();
    const race = document.querySelector('#race-create').value.trim();
    const clas = document.querySelector('#class-create').value.trim();
    const alignment = document.querySelector('#alignment-create').value.trim();
    const spells = document.querySelector('#spells-create').value.trim();
    const equipment = document.querySelector('#equipment-create').value.trim();

    if (name && race && clas && alignment && spells && equipment) {
      const response = await fetch('/api/characters', {
        method: 'POST',
        body: JSON.stringify({ name, race, alignment, spells, equipment }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create character.');
      }
    }
  };

  document
  .querySelector('.character-create')
  .addEventListener('submit', createCharacterFormHandler);
