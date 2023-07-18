const deleteCharacterFormHandler = async (event) => {
    event.preventDefault();
  
const characterId = document.querySelector("#deleteCharacter").value
    
    if (characterId) {
      const response = await fetch(`/api/characters/${characterId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete character.');
      }
    }
  };

  document
  .querySelector('#deleteCharacter')
  .addEventListener('click', deleteCharacterFormHandler);