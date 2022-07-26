function maiorValor(param) {
  let result = 0;

  for (let index in param) {
    if (param[result] < param[index]) {
      result = param[index];
    }
  }

  return result;
}

console.log(maiorValor([2, 4, 6, 7, 10, 0, -3]));