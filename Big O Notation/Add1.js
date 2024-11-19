function addUptoFirst(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
// const t1 = Date.now();
// console.log(addUptoFirst(10000000000));
// const t2 = Date.now();
// console.log(`${(t2 - t1) / 1000} seconds`);

function addUptoSecond(n) {
  return (n * (n + 1)) / 2;
}

// const t1 = Date.now();
// console.log(addUptoSecond(10000000000));
// const t2 = Date.now();
// console.log(`${(t2 - t1) / 1000} seconds`);
