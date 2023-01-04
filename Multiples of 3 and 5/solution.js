function multipleOf3and5(N) {
  let output = 0;
  for (let i = 3; i < N; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      output += i;
    }
  }
  return output;
}

console.log(multipleOf3and5(10));
