function numRepetido(param) {
  let repetido = 0;
  let contador = 0;
  let numeroRepetido = 0;

  for (let index in param) {
    let contador2 = param[index];

    for (let index2 in param) {
      if (contador2 === param[index2]) {
        contador += 1;
      }
    }

    if (contador > repetido) {
      repetido = contador;
      numeroRepetido = index;
    }

    contador = 0;
  }

  return param[numeroRepetido];
}

console.log(numRepetido([2, 3, 2, 5, 8, 2, 3]));