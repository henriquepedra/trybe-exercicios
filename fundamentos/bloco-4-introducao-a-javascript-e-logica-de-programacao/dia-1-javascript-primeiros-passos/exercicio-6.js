const pecaDeXadrez = "BISPO";

switch (pecaDeXadrez.toLowerCase()) {
  case "rainha":
    console.log("Horizontal, Vertifcal e Diagonal");
    break;

  case "rei":
    console.log("Qualquer direção");
    break;

  case "cavalo":
    console.log("Em 'L'");
    break;

  case "bispo":
    console.log("Diagonal");
    break;

  case "torre":
    console.log("Horizontal e Vertical");
    break;

  case "peão":
    console.log("para frente");
    break;

  default:
    console.log("Peça inválida!");
    break;
}
