let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = null;

for (let index = 0; index < numbers.length; index += 1) {
  if (menorNumero == null) {
    menorNumero = numbers[index];
  }
  else if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}

console.log("Menor número é: " + menorNumero);