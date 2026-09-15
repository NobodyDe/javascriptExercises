async function searchAllPages(baseUrl, searchName) {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      console.log(`HTML error, ${response.statusText}`);
      return null;
    }
    const json = await response.json();

    const search = json.items.find((u) => u.name === searchName);
    if (search) {
      return search;
    }
    if (json.links.next) {
      const newPage = json.links.next;
      return await searchAllPages(newPage, searchName);
    } else {
      console.log("Personagem não encontrado");
    }

    return null;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

const character = await searchAllPages(
  "https://dragonball-api.com/api/characters?page=1&limit=10",
  "Gohan",
);

console.log(character);
