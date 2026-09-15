const ids = [1, 2, 3, 4, 9999];

async function getCharacter(id) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    if (!response.ok) {
      console.log(`http error! status: ${response.status}`);
      return undefined;
    }
    const json = await response.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.error(error.menssage);
    return undefined;
  }
}

getCharacter(ids);

Promise.all([getCharacter(ids)]).then((valores) => {
  console.log(valores);
});
