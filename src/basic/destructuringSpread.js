const character = {
  name: "Rick Sanchez",
  origin: { name: "Earth C-137", dimension: "C-137" },
  episode: ["S01E01", "S01E02", "S01E03"],
};

const {
  origin: { name: jose, dimension },
} = character;

console.log(origin);

// const [first, ...episodes] = character.episode;
// console.log(first);

// const species = { species: "Human" };
// const copia = { ...character, ...species };

// console.log(copia);
