async function findInApi() {
  let url = "https://dragonball-api.com/api/characters?page=1&limit=10";
  const response = await fetch(url);
  let json = await response.json();
  async function findElement(spec) {
    let find;

    do {
      find = json.items.find((u) => u.name == spec);

      if (json.links.next) {
        const nextPage = json.links.next;

        const newSeach = await fetch(nextPage);
        json = await newSeach.json();
        // find = json.items.find((u) => u.name == spec);
      } else {
        return console.log("não há mais paginas");
      }
    } while (find == undefined);

    console.log(find);
  }
  findElement("Krillin");
}

findInApi();

//função recursiva