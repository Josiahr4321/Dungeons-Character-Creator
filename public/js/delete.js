const deleteCharacterFormHandler = async (event) => {
    
  if(event.target.matches(".deleteCharacter")){
    event.preventDefault();
    const characterId = event.target.getAttribute('value')
    
    if (characterId) {
      const response = await fetch(`/api/characters/${characterId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
      if (response.ok) {
        document.getElementById(`character-${characterId}`).remove()
      } else {
        alert('Failed to delete character.');
      }
    }
  }

  };

  document.body.addEventListener('click', deleteCharacterFormHandler);
 