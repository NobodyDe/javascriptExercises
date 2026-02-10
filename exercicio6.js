async function getCharacter(id) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    if (!response.ok) {
      console.log(`http error! status: ${response.status}`);
      return null;
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.menssage);
  }
}

getCharacter(1);
