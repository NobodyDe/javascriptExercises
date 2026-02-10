async function findInApi() {
  let url = "https://dragonball-api.com/api/characters?page=1&limit=10";
  const response = await fetch(url);
  let json = await response.json();
  async function findElement(spec) {
    let find = json.items.find((u) => u.name == spec);

    if (find !== undefined) {
      return console.log(find);
    }

    if (json.links.next) {
      const nextPage = json.links.next;
      const newSeach = await fetch(nextPage);
      json = await newSeach.json();
      return findElement(spec);
    }
    console.log("Elemento Não encontrado");
  }
  findElement("dsadads");
}

findInApi();

// função recursiva
