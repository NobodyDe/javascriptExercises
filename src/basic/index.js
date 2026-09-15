async function searchAPI() {
  const results = await Promise.allSettled([
    fetch("https://rickandmortyapi.com/api/character"),
    fetch("https://dragonballs-api.com/api/character"),
    fetch("https://rickandmortyapi.com/api/character"),
  ]);

  const finalData = await Promise.all(
    results.map(async (res) => {
      if (res.status === "rejected") {
        return res.reason;
      }

      if (!res.value.ok) {
        return new Error("Erro na requisição" + res.value.status);
      }

      return await res.value.json();
    })
  );

  return console.log(finalData);
}
searchAPI();

//Promise.all
// for wait
