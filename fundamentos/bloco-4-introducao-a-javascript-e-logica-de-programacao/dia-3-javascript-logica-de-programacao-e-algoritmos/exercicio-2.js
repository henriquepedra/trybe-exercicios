let inverter = 'Olá!';
let invertida = '';

for (let index = 0; index < inverter.length; index += 1) {
  invertida += inverter[inverter.length - 1 - index];
}

console.log(invertida);