function soma(param) {
  let result = 0;

  for (let index = 0; index <= param; index += 1) {
    result += index;
  }

  return result;
}

console.log(soma(5));