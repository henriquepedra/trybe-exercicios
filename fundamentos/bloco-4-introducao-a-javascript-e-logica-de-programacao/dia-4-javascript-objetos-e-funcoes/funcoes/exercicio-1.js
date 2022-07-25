function palindromo(string) {
  for (let index in string) {
    if (string[index] !== string[string.length - 1 - index]) {
      return false;
    }
  }

  return true;
}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));
