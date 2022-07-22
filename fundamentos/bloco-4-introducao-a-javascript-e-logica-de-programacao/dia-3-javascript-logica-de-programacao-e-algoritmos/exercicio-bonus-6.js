let divisor = 1;
let n = 27;

for (let index = 2; index <= n; index += 1) {
  if (n % index == 0) {
    divisor += 1;
  }
}

if (divisor == 2) {
  console.log(n, 'é um número primo.');
}
else {
  console.log(n, 'não é um número primo.');
}