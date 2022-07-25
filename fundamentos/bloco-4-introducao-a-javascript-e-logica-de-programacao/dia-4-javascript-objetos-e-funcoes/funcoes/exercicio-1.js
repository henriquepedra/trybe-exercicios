function palindromo(string) {
  for (let index in string) {
    if (string[index] == string[string.length - 1 - index]) {
      return true;
    }
  }

  return false;
}

// console.log(palindromo('arara'));