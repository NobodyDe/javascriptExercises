const double = (n) => n * 2;
const addTen = (n) => n + 10;
const square = (n) => n ** 2;

function compose(...fns) {
  return function (valor) {
    return [...fns].reduce((arr, cur) => cur(arr), valor);
  };
}

const teste = compose(double, addTen, square)(3);
console.log(teste);
