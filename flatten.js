function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flatten(item));
    }

    return acc.concat(item);
  }, []);
}

console.log(flatten([1, [2, [3, 4]], 5]));
