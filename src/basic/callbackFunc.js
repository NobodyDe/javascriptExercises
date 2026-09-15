function processArray(numbers, cb) {
  return numbers.map((number) => cb(number));
}

const numbers = [1, 2, 3, 4, 5];

console.log(processArray(numbers, (n) => n ** 2));
