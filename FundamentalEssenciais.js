const users = [
  { name: "Rick", age: 70, status: "Alive" },
  { name: "Morty", age: 14, status: "Alive" },
  { name: "Bird Person", age: 50, status: "Dead" },
  { name: "Summer", age: 17, status: "Alive" },
];

const onlyNames = users.map((names) => {
  return names.name;
});

console.log(onlyNames);

const onlyAlive = users.filter((character) => character.status === "Alive");
console.log(onlyAlive);

const first18More = users.find((character) => character.age > 18);
console.log(first18More);

const sumOfages = users.reduce((acc, crv) => {
  return acc + crv.age;
}, 0);
console.log(sumOfages);

const everAlive = users.every((item) => item.status === "Alive");
console.log(everAlive);
