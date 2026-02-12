function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr[0] + sumArray(arr.slice(1));
  console.log(sum);
  return sum;
}

sumArray([1, 2, 3, 4, 5, 6, 7]);
