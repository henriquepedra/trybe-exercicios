const produto = 10;
const venda = 20;
const imposto = 1.2;

if (produto >= 0 && venda >= 0) {
  const custoTotal = produto * imposto;
  const lucro = venda - custoTotal;
  console.log("Lucro da empresa : R$ " + lucro * 1000 + ".");
}
else {
  console.log("Error! Valor menor que zero.");
}