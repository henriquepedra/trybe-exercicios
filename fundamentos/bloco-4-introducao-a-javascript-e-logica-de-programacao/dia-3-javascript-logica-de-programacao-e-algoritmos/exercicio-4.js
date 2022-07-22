let maiorNumeroPrimo = null;

for (let index = 2; index <= 50; index += 1) {
  let numeroPrimo = true;
  for (let divisor = 2; divisor < index; divisor += 1) {
    if (index % divisor == 0) {
      numeroPrimo = false;
    }
  }

  if (numeroPrimo) {
    maiorNumeroPrimo = index;
  }
}

console.log(maiorNumeroPrimo);