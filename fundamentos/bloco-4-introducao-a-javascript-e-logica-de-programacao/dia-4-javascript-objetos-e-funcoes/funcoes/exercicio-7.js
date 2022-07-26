function recebeString(stringWord, stringEnding) {
  stringWord = stringWord.split('').reverse().join('');
  stringEnding = stringEnding.split('').reverse().join('');
  let result;

  for (let index = 0; index < stringEnding.length; index += 1) {
    if (stringWord[index] !== stringEnding[index]) {
      result = false;
    }
    else {
      result = true;
    }
  }

  return result;
}

console.log(recebeString('trybe', 'be'));