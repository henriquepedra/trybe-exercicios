function menorValor(param) {
  let result = 0;

  for (let index in param) {
    if (param[result] > param[index]) {
      result = index;
    }
  }

  return result;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));