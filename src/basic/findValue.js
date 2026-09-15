const data = {
  character: {
    name: "Rick",
    details: {
      origin: {
        planet: "Earth",
        dimension: "C-137",
      },
    },
  },
};

function findValue(obj, targetKey) {
  for (const [key, value] of Object.entries(obj)) {
    if (key === targetKey) {
      return value;
    }
    if (typeof value === "object") {
      const result = findValue(value, targetKey);
      if (result !== undefined) {
        return result;
      }
    }
  }
  return undefined;
}

const finder = findValue(data, "planet");
console.log(finder);
