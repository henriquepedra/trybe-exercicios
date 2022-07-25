function palindromo(param) {
  for (let index in param) {
    if (param[index] !== param[param.length - 1 - index]) {
      return false;
    }
  }

  return true;
}

// console.log(palindromo('arara'));
// console.log(palindromo('desenvolvimento'));
