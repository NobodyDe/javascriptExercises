async function getAllCharactes(maxPages = Infinity) {
  const allCharacters = [];
  let nextPage = "https://rickandmortyapi.com/api/character";

  async function getCharacterPerPage(page) {
    const response = await fetch(page);
    if (!response.ok) {
      console.log(`HTML error, ${response.message}`);
    }
    const json = await response.json();
    const characters = json.results;
    allCharacters.push([...characters]);
    if (json.info.next === null) {
      return null;
    }

    if (json.info.next) {
      nextPage = json.info.next;
      await getCharacterPerPage(nextPage);
    }

    console.log(allCharacters);
  }

  await getCharacterPerPage(nextPage);

  return allCharacters;
}

getAllCharactes();
