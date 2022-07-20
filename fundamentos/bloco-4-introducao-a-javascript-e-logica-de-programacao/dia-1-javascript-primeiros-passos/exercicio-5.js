let ladoA = 50;
let ladoB = 100;
let ladoC = 30;

let somaDosLados = ladoA + ladoB + ladoC;
let ladosSaoPositivos = ladoA > 0 && ladoB > 0 && ladoC > 0;

if (ladosSaoPositivos) {
  if (somaDosLados == 180) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
else {
  console.log("Ângulo inválido!");
}