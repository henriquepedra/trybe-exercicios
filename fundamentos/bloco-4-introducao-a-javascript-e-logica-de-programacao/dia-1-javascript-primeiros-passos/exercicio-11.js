let INSS;
let IR;
const salarioBruto = 1200;

if (salarioBruto <= 1556.94) {
  INSS = salarioBruto * 0.08;
}
else if (salarioBruto <= 2594.92) {
  INSS = salarioBruto * 0.09;
}
else if (salarioBruto <= 5189.82) {
  INSS = salarioBruto * 0.11;
}
else {
  INSS = 570.88;
}

const salarioBase = salarioBruto - INSS;

if (salarioBase <= 1903.98) {
  IR = 0;
}
else if (salarioBase <= 2826.65) {
  IR = (salarioBase * 0.075) - 142.8;
}
else if (salarioBase <= 3751.05) {
  IR = (salarioBase * 0.15) - 354.8;
}
else if (salarioBase <= 4664.68) {
  IR = (salarioBase * 0.225) - 636.13;
}
else {
  IR = (salarioBase * 0.275) - 869.36;
}

const salarioLiquido = salarioBase - IR;

console.log("Salário bruto: R$ " + salarioBruto)
console.log("INSS: " + INSS);
console.log("IR: " + IR);
console.log("Salário liquido: R$ " + salarioLiquido);