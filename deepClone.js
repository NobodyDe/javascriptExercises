const original = {
  name: "Rick",
  origin: { name: "Earth", dimension: "C-137" },
  episodes: ["S01E01", "S01E02"],
};

function deepClone(obj) {
  if (typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    let newArray = obj.map((item) => {
      return deepClone(item);
    });
    return newArray;
  }
  if (typeof obj === "object") {
    let newObj = {};
    Object.entries(obj).forEach(([chave, valor]) => {
      newObj[chave] = deepClone(valor);
    });
    return newObj;
  }
}

const clone = deepClone(original);
console.log(clone);
