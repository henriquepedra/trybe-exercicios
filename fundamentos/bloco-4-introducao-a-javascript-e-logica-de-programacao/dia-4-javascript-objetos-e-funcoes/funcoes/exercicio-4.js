function maiorNome(param) {
  let result = param[0];

  for (let index in param) {
    if (result.length < param[index].length) {
      result = param[index];
    }
  }

  return result;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));