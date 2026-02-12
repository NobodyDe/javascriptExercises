function countDown(n) {
  if (n === 0) {
    console.log("🚀 lançamento");
    return;
  }
  setTimeout(() => {
    console.log(n);
    countDown(n - 1);
  }, 1000);
}

countDown(5);
